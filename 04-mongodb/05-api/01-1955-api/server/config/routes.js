const controller1955 = require('../controller/1955.persons')

module.exports = function(app){
    app.get('/', controller1955.index),
    app.get('/new/:name/', controller1955.create),
    app.get('/:name', controller1955.show),
    app.get('/remove/:name/', controller1955.destroy)
}