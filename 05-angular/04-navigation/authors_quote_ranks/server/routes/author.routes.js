const { authorController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/', authorController.index)
  .post('/', authorController.create)
  .get('/:_id', authorController.show)
  .put('/:_id', authorController.update)
  .delete('/:_id', authorController.destroy)
  // .get('/quotes', authorController.showQuotes)
  .get('/:_id/quotes', authorController.showQuotes)
  // .post('/quote', authorController.createQuote)
  .post('/:_id/quote', authorController.createQuote)
  .delete('/:quote_id', authorController.destroyQuote);



