const router = require('express').Router();
const path = require('path');

module.exports = router
  .all('*', (request, response) => {
    const file = path.resolve('dist/authors/index.html');
    response.sendFile(file);
  });
