const router = require('express').Router();
const authorRoutes = require('./author.routes');

module.exports = router.use('/authors', authorRoutes);
