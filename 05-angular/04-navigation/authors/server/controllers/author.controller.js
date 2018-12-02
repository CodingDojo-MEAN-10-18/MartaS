const { Author } = require('../models');
const { Http } = require('@status/codes');


module.exports = {
  index(request, response) {
    Author.find({})
      .then(authors => response.json(authors))
      .catch(error => response.json(error));
  },
  create(request, response) {
    Author.create(request.body)
      .then(author => response.json(author))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
        key => error.errors[key].message);
        response.status(Http.UnprocessableEntity).json(errors);
        });
  },

  show(request, response) {
    Author.findById(request.params._id)
      .then(author => response.json(author))
      .catch(error => response.status(500).json(error));
  },

  update(request, response) {
    Author.findByIdAndUpdate(request.params._id, request.body, { new: true })
      .then(author => response.json(author))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
        key => error.errors[key].message);
        response.status(Http.UnprocessableEntity).json(errors);
        });
  },
  destroy(request, response) {
    Author.findByIdAndRemove(request.params._id)
       .then(author => response.json(author))
       .catch(console.log);
      console.log('from destroy', request.params._id);
//      .catch(error => response.json(error));
  }
};
