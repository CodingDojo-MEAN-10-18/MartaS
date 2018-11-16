const tasks = require('../controllers/tasks')
//const router = require('express').Router();


module.exports = function(app) {
    app.get('/', tasks.index),
    app.get('/:id/', tasks.show),
    app.post('/', tasks.create),
    app.put('/:id', tasks.update),
    app.delete('/:id', tasks.destroy)
}
/*
module.exports = router
    .get('/', tasks.index)
    .get('/:id/', tasks.show)
    .post('/', tasks.create)
    .put('/:id', tasks.update)
    .delete('/:id', tasks.destroy)
*/