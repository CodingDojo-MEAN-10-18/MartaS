 const { Author } = require('../models')
// const Author = require('../models/author.model.js')
// const { Http } = require('@status/codes');
// const Http = require('http-status-codes')

module.exports = {
  index(request, response) {
    Author.find({}) //finds all authors
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
    Author.findByIdAndUpdate(request.params._id, request.body, {new: true})
    .then(author => {response.json(author)})
    .catch(error => response.json(error))
  },
  destroy(request, response) {
    Author.findByIdAndRemove(request.params._id)
    .then(author => response.json(author))
    .catch(error => response.json(error));
  }
}



/*

const Task = require('mongoose').model('Task')

module.exports = {
    index(request, response) {
        Task.find(request.body)
            .then(tasks => response.json(tasks))
            .catch(error => response.json(error));
    },
    create(request, response) {
        Task.create(request.body)
            .then(task => response.json(task))
            .catch(error => response.json(error));
    },
    show(request, response) {
        Task.findOne({_id: request.params.id})
            .then(task => response.json(task))
            .catch(error => response.json(error));
    },
    update(request, response) {
        Task.findOneAndUpdate({_id: request.params.id})
        .then(task => {response.json(task)})
        .catch(error => response.json(error))
    },
    destroy(request, response) {
        Task.deleteOne({_id: request.params.id})
        .then(result => response.json(result))
        .catch(error => response.json(error));
    }
}

*/
