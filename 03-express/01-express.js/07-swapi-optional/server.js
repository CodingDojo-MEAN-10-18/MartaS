const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

var app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, './views')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/people', function(request, response) {
    axios.get('https://swapi.co/api/people')
    .then(data => {
        response.json(data.data);
    })
    .catch(error => {
        console.log(error);
        response.json(error);
    })
})

app.get('/planets', function(request, response) {
    axios.get('https://swapi.co/api/planets')
    .then(data => {
        //console.log(data.data.results)
        response.json(data.data);
    })
    .catch(error => {
        console.log(error);
        response.json(error);
    })
})

app.get('/', function(request, response) {
    response.render('index');
})

app.listen(8000, function(){
    console.log('listening on port 8000')
})