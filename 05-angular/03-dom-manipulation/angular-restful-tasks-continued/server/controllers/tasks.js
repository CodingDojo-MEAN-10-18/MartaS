const Task = require('../models/task.js');

module.exports = {
  index(request, response) {
    Task.find({})
      .then(tasks => response.json(tasks))
      .catch(error => response.json(error));
  },
  create(request, response) {
    Task.create(request.body)
      .then(task => response.json(task))
      .catch(error => response.json(error));
  },
  show(request, response) {
    Task.findOne({ _id: request.params._id })
      .then(task => response.json(task))
      .catch(error => response.json(error));
  },
  update(request, response) {
    Task.findOneAndUpdate({ _id: request.params._id })
      .then(task => { response.json(task); })
      .catch(error => response.json(error));
  },
  destroy(request, response) {
    Task.deleteOne({ _id: request.params._id })
      .then(result => response.json(result))
      .catch(error => response.json(error));
  }
};
