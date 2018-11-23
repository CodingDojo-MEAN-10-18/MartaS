const router = require('express').Router();
const taskRoutes = require('./task.routes');

module.exports =
  router.use('/tasks', taskRoutes);
