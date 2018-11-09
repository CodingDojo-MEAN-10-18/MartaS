const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const app = express();

app.use(bodyParser.urlencoded({ extended:true }))
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs')

app.get('/', function(request, response){
    Owl.find({}, function(error, owls) {
        if (error) {console.log(error)}
        response.render('index', {owls: owls});
    });
})

app.get('/new', function(request, response) {
    response.render('new')
})

app.get('/owls/edit/:id', function(request, response) {
    Owl.find({_id: request.params.id }, function(error, owl_id) {
        if (error) { console.log(error); }
    response.render('edit', { owl: owl_id[0] })
    })
})

app.get('/owls/:id', function(request, response) {
    Owl.find({_id: request.params.id}, function(error, owl) {
        if (error) {console.log(error); }
    response.render('show', { owl: owl })
    })
})

app.post('/owls/:id', function(request, response){
    Owl.update({_id: request.params.id}, request.body, function(error, owl_id) { 
            if (error) {console.log(error); }
            response.redirect('/owls/' + request.params.id)
    });
});

app.post('/owls', function(request, response){
    let owl = new Owl({name: request.body.name, color: request.body.color, wingspan: request.body.wingspan})
    owl.save(function(error) {
        if (error) {
            console.log('something went wrong');
        }
        else {
            console.log('successful added an owl')
            response.redirect('/')
        }
    })
})

app.post('/owls/destroy/:id', function(request, response) {
    Owl.remove({_id: request.params.id}, function(error) {
        console.log('removed owl');
    response.redirect('/')
    });
})

const { Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/owl_db', {useNewUrlParser: true });
mongoose.connection.on('connected', () => 
console.log('connected to mongodb'));

const OwlSchema = new Schema({
    name: String,
    color: String,
    wingspan: Number
})

const Owl = mongoose.model('Owl', OwlSchema)

app.listen(8000, function() {
    console.log('listening on port 8000')
})