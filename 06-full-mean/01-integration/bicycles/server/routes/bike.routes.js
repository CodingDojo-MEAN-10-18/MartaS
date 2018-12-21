const { bikeController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/', bikeController.index)
  .post('/', bikeController.create)
  .get('/:id', bikeController.showMyBikes);
  // .get('/:_id', bikeController.show)
  // .put('/:_id', bikeController.update);
//   .delete('/:_id', bikeController.destroy);





