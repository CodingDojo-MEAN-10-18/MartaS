const { weatherController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/', weatherController.index)
  .get('/:city', weatherController.show);
