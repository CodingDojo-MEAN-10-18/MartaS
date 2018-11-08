var express = require('express');
var app = express();
var bodyParser= require('body-parser')
const mongoose = require('mongoose') 

app.use(bodyParser.urlencoded({ extended:true }))

const path = require('path')
app.use(express.static(path.join(__dirname,"./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs')

app.get('/', function(request, response) {
    response.render('index');
})
app.get('/quotes', function(request, response) {
    User.find({}, function(error, users) {
        if (error) 
        {console.log(error)}
        response.render('quotes', {users: users});
    })
})
app.post('/quotes', function(request, response) {
    //console.log("POST DATA", request.body)
    let user = new User({name: request.body.name, quote: request.body.quote})
    user.save(function(error) {
        if(error) {
            console.log('something went wrong :(');
        } else {
            console.log('successfully added a user!', user);
            response.redirect('/quotes')
        }
    })
})


const { Schema } = mongoose;
//equivalent to const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/quote_dojo', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

const UserSchema = new Schema({
    name: String,
    quote: String,
    date: {
        type: Date,
        default: Date.now
    }
})

//User => collection will be => users. mongoose creates that collection name for you 
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'
// shorter alternative to 2 lines above: const User = mongoose.model('User', UserSchema);


app.listen(8000, function () {
    console.log("listening on port 8000");
})
