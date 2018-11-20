const tasks = require('../controllers/tasks');
//const router = require('express').Router();



module.exports = function (app) {
  app.get('/tasks', tasks.index),
    app.get('/tasks/:id/', tasks.show),
    app.post('/tasks', tasks.create),
    app.put('/tasks/:id', tasks.update),
    app.delete('tasks/:id', tasks.destroy);
};
/*
module.exports = function (app) {
  app.get('/', tasks.index);
  app.get('/:id/', tasks.show);
  app.post('/', tasks.create);
  app.put('/:id', tasks.update);
  app.delete('/:id', tasks.destroy);
};
*/
