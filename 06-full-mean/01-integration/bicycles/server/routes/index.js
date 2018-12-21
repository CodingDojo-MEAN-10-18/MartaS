const router = require('express').Router();
const authRoutes = require('./auth.routes');
const bikeRoutes = require('./bike.routes');

module.exports = router
  .use('/auth', authRoutes)
  .use('/bikes', bikeRoutes);
