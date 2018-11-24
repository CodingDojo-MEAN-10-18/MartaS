
// const { authorController } = require('../controllers');
/*
const router = require('express').Router();

module.exports = router
  .get('/', authorController.index)
  .post('/', authorController.create)
  .get('/:author_id', authorController.show)
  .put('/:author_id', authorController.update)
  .delete('/:author_id', authorController.destroy)

 */
 const authors = require('../controllers/author.controller');
 //const router = require('express').Router();



module.exports = function (app) {
  app.get('/authors', authors.index),
    app.get('/authors/:id/', authors.show),
    app.post('/authors', authors.create),
    app.put('/authors/:id', authors.update),
    app.delete('/authors/:id', authors.destroy);
};


