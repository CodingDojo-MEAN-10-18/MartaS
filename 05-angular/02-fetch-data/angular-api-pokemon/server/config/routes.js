const tasks = require('../controllers/tasks')
//const router = require('express').Router();


module.exports = function(app) {
    app.get('/tasks', tasks.index),
    app.get('/tasks/:id/', tasks.show),
    app.post('/tasks', tasks.create),
    app.put('/tasks/:id', tasks.update),
    app.delete('tasks/:id', tasks.destroy)
}
/*
module.exports = router
    .get('/', tasks.index)
    .get('/:id/', tasks.show)
    .post('/', tasks.create)
    .put('/:id', tasks.update)
    .delete('/:id', tasks.destroy)
*/