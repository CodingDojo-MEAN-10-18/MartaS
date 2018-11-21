
const { authorController } = require('../controllers');
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
  app.get('/', authors.index),
    app.get('/:id/', authors.show),
    app.post('/', authors.create),
    app.put('//:id', authors.update),
    app.delete('/:id', authors.destroy);
}

