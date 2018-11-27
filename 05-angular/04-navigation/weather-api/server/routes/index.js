const router = require('express').Router();
const weatherRoutes = require('./weather.routes');

// module.exports = router.use('/', weatherRoutes);

module.exports = router.use('/weather', weatherRoutes);
