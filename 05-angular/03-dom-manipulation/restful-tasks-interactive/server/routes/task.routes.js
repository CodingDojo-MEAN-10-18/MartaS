const { taskController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/tasks', taskController.showAll)
  .get('/tasks/:id/', taskController.showOne)
  .post('/tasks', taskController.create);
