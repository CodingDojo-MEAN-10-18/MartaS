const mongoose = require('mongoose');
const User = mongoose.model('User')
const quotes = require('../controllers/quotes.js')

module.exports = function(app) {

    app.get('/', function(request,response) {
        quotes.index(request, response);
    });
    
    app.post('/quotes', function(request,response){
        quotes.create(request, response);
    });
    app.get('/quotes', function(request,response){
        quotes.show(request, response);
    });
}