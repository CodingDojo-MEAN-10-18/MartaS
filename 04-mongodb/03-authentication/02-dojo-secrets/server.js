const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const mongoose = require('mongoose');
const flash = require('express-flash');
const app = express();
app.set('trust proxy', 1);
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000000 }
}));

app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const { Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/secrets_db', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

var ObjectId = require('mongoose').Types.ObjectId;
// var ObjectId = mongoose.SchemaTypes.ObjectId;

const CommentSchema = new Schema({

  comment: { type: String, required: [true, 'Comment must be at least 2 characters'], minlength: 2 },

});
const Comment = mongoose.model('Comment', CommentSchema);

const SecretSchema = new Schema({
  user_id: { type: String, required: true },
  secret: { type: String, required: [true, 'Secret must be at least 6 characters'], minlength: 4 },
  comments: [{
     type: Schema.Types.ObjectId,
     ref: 'Comment'
   }],
});

const Secret = mongoose.model('Secret', SecretSchema);

const UserSchema = new Schema({
  fname: { type: String, required: [true, 'First name must have at least 1 character'], minlength: 1 },
  lname: { type: String, required: [true, 'Last name must be at least 2 characters'], minlength: 2 },
  email: { type: String, required: [true, 'An email is required'] },
  password: { type: String, required: [true, 'Password must be at least 8 characters'], minlength: 8 },
  //secrets: [SecretSchema]
  secrets: [{
    type: Schema.Types.ObjectId,
    ref: 'Secret'
  }]
});

const User = mongoose.model('User', UserSchema);

app.get('/', function (request, response) {
  response.render('index');
});

app.get('/secrets', function (request, response) {
  console.log('user session id:', request.session.user_id);
  Secret.find({}, function (error, secrets) {
    if (error) {
      console.log(error);
    };
    response.render('secrets', { user: request.session.user_id, secrets: secrets });
  });
});
app.post('/register', function (request, response) {
  let user = new User({ fname: request.body.fname, lname: request.body.lname, email: request.body.email, password: request.body.password });
  user.save(function (error) {
    if (error) {
      console.log('We have an error', error);
      for (const key in error.errors) {
        request.flash('registration', error.errors[key].message);
      }
      response.redirect('/');
    } else {
      request.session.user_id = user.id;
      request.session.first_name = user.fname;
      request.session.email = user.email;
      response.redirect('/secrets');
    }
  });
});
app.post('/login', function (request, response) {
  console.log('request.body: ', request.body);
  User.findOne({ email: request.body.email, password: request.body.password }, (error, user) => {
    // console.log(user);
    console.log(error);
    if (error) {
      console.log('We have a login error', error);
      for (const key in error.errors) {
        request.flash('login', error.errors[key].message);
      }
      response.redirect('/');
    } else {
      request.session.user_id = user.id;
      request.session.email = user.email;
      request.session.first_name = user.fname;
      return response.redirect('/secrets');
    }
  });
});

app.post('/add_secret', function (request, response) {
  let secret = new Secret({ user_id: request.session.user_id, secret: request.body.secret });
  //console.log(secret)
  secret.save(function (error) {
    console.log(secret);
    if (error) {
      console.log('We have an error', error);
      for (var key in error.errors) {
        request.flash('registration', error.errors[key].message);
      }
      return response.redirect('/secrets');
    } else {
      User.updateOne({ _id: request.session.user_id }, { $push: { secrets: secret } }, function (error) {
        console.log(error);
      });
      return response.redirect('/secrets');
    }
  });
});

app.get('/secrets/:id', function (request, response) {
  Secret.findById(request.params.id)
    .populate('comments')
    .then(secret => {
      console.log(secret);
      response.render('details', { user: request.session.user_id, secret: secret });
    })

    .catch(error => {
      console.log(`error, ${error}`);
      for (let key in error.errors) {
        console.log(error.errors[key].message);
        request.flash('comment error', error.errors[key].message);
      }
    });
});

app.get('/secrets/:id/delete', function (request, response) {
  Secret.findOneAndDelete({ _id: request.params.id }, function (error, secret) {
    if (error) { console.log(error); }
    response.redirect('/secrets');
  });
});

app.post('/secrets/:_id', (request, response) => {
  console.log('param id', request.params._id);
  Comment.create(request.body)
    .then(comment => {
      console.log(comment)
      //Secret.findOne({ '_id': new ObjectId(request.params._id) })
      Secret.findById({ _id: request.params._id })
        // .populate('comment')
        .then(secret => {
          secret.comments.push(comment);
          console.log('added comment', secret);
          secret.save();
          console.log('trying this', secret.comments);
          // console.log('secret id', _id);
          response.redirect(`/secrets/${secret._id}`);
        })
        .catch (error => {
          console.log(`error, ${error}`);
                for (let key in error.errors) {
                  console.log(error.errors[key].message);
                  request.flash('comment error', error.errors[key].message);
                }

                response.redirect(`/secrets/${secret._id}`);
        });
});
});
// app.post('/secrets/:secret_id', function (request, response) {
//   let comment = new Comment({ comment: request.body.comment, secret: });

//   comment.save(function (error) {
//     console.log(comment);

          //       Secret.updateOne({ _id: secret._id }, { $push: { comments: comment } }, function (error) {
          //         console.log(error);
          //       });
          //       return response.redirect('/secrets/:id');

          //     }
          //   });
          // });

          app.post('/', function (request, response) {
            if (error) {
              console.log(error);
            }
            return redirect('/secrets/:id/comment');
});
  app.listen(8000, function () {
  console.log('listening on port 8000');
});
