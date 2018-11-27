const { Weather } = require('../models');

module.exports = {
  index(request, response) {
    Weather.find({})
      .then(weather => response.json(weather))
      .catch(error => response.json(error));
  },
  show(request, response) {
    Weather.findById(request.params.city)
      .then(weather => response.json(weather))
      .catch(error => response.json(error));
  }
};

