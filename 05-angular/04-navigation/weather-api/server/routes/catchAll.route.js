const router = require('express').Router();
const path = require('path');

module.exports = router
  .all('*', (request, response) => {
    const file = path.resolve('dist/weather-api/index.html');
    response.sendFile(file);
  });
