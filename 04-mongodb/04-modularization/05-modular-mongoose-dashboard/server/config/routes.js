const mongoose = require('mongoose')
const Owl = mongoose.model('Owl')

const owls = require('../controllers/owls.js')

module.exports = function(app) {
    app.get('/', function(request, response) {
        owls.index(request, response);
    });
    app.get('/new', function(request, response) {
        owls.new(request, response);
    })
    app.get('/owls/edit/:id', function(request, response) {
        owls.showOne(request, response);
    })
    app.get('/owls/:id', function(request, response) {
        owls.show(request, response);
    })
    app.post('/owls/:id', function(request, response) {
        owls.update(request, response);
    })
    app.post('/owls', function(request, response){
        owls.create(request, response);
    });
    app.post('/owls/destroy/:id', function(request, response) {
        owls.destroy(request, response);
    })
}