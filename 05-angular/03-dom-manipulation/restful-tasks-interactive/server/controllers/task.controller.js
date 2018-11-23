const { Task } = require('../models');
// const { Http } = require('@status/codes');

module.exports = {

  showAll(request, response) {
    Task.find({})
      .then(tasks => response.json(tasks))
      .catch(error => response.json(error));
  },
  create(request, response) {
    Task.create(request.body)
      .then(task => response.json(task))
      .catch(error => response.json(error));
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message);
        response.status(Http.UnprocessableEntity).json(errors);
  },
  showOne(request, response) {
    Task.findById(request.params._id)
      .then(task => response.json(task))
      .catch(error => response.json(error));
  }
};
