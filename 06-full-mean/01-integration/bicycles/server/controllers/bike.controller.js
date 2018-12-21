const { Bike, User } = require('../models');
const { Http } = require('@status/codes');
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
  index(request, response) {
    Bike.find({})
      .then(bikes => response.json(bikes))
      .catch(error => response.json(error));
  },
  create(request, response) {
    Bike.create({ title: request.body.title, description: request.body.description, price: request.body.price, location: request.body.location, user: request.session.user._id })
      .then(bike => {
        console.log(bike);
        return User.findByIdAndUpdate(bike.user, { $push: { bikes: bike } })
          .then(user => {
            console.log(user);
            response.json(bike);
          });
      })

      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message);
        response.status(Http.UnprocessableEntity).json(errors);
      });
  },
  showMyBikes(request, response) {
    Bike.find({ user: request.params.id })
      .then(myBikes => {
        console.log(myBikes);
        response.json(myBikes);
      })
      .catch(error => response.json(error));
  },

  // update(request, response) {
  //   Bike.findOneAndUpdate({ _id: request.params._id }, request.body, { new: true })
  //     .then(bike => {
  //       console.log(bike);
  // }) //response.json(bike))
  //     .catch(error => {
  //       const errors = Object.keys(error.errors).map(
  //         key => error.errors[key].message);
  //       response.status(Http.UnprocessableEntity).json(errors);
  //     });
  // }
};



//   show(request, response) {
//     Bike.findById(request.params._id)
//       .then(bike => response.json(bike))
//       .catch(error => response.status(500).json(error));
//   },
//   destroy(request, response) {
//     Bike.findByIdAndRemove(request.params._id)
//        .then(bike => response.json(author))
//        .catch(console.log);
//       console.log('from destroy', request.params._id);
// //      .catch(error => response.json(error));
//   },
