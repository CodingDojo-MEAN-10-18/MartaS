const router = require('express').Router();
const path = require('path');

module.exports = router
  .all('*', (request, response) => {
    const file = path.resolve('dist/bicyles/index.html');
    response.sendFile(file);
  });
