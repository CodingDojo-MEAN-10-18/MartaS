const { Author } = require('../models');

module.exports = {
  index(request, response) {
    Author.find({})
      .then(authors => response.json(authors))
      .catch(error => response.json(error));
  },
  create(request, response) {
    Author.create(request.body)
      .then(author => response.json(author))
      .catch(error => response.json(error));
  },
  show(request, response) {
    Author.findById(request.params._id)
      .then(author => response.json(author))
      .catch(error => response.json(error));
  },
  update(request, response) {
    Author.findByIdAndUpdate(request.params._id, request.body, { new: true })
      .then(author => { response.json(author); })
      .catch(error => response.json(error));
  },
  destroy(request, response) {
    Author.findByIdAndRemove(request.params._id)
      .then(author => response.json(author))
      .catch(error => response.json(error));
  }
};
