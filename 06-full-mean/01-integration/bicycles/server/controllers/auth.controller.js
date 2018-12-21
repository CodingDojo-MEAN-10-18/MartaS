const User = require('mongoose').model('User');
const { Http } = require('@status/codes');

module.exports = {
  login(request, response) {
    const { email, password } = request.body;

    User.findOne({ email })
      .then(user => {
        // console.log('found this user', user);
        return User.validatePassword(password, user.password).then(valid => {
          if (!valid) throw new Error('there was an error');

          completeLogin(request, response, user);
        });
      })
      .catch(() => {
        response
          .status(Http.Unauthorized)
          .json('email/password combo not found');
        });
  },
  register(request, response) {
    console.log('register', request.body);

    User.create(request.body)
      .then(user => {
        completeLogin(request, response, user);
      })
      .catch(() => {
        response
          .status(Http.Unauthorized)
          .json('Registration invalid');
        });
      // .catch(error => {
      //   console.log(error);
      // });
      // .catch(error => {
      //   const errors = Object.keys(error.errors).map(
      //     key => error.errors[key].message
      //   );

      //   response.status(Http.UnprocessableEntity).json(errors);
      // });
  },
  logout(request, response) {
    console.log('logging out server side');

    request.session.destroy();
    response.clearCookie('userID');
    response.clearCookie('expiration');

    response.json(true);
  },
  getUser(request, response) {
    if (request.session.user) {
      console.log('session user from auth controller', request.session.user);
      return response.json(request.session.user);
      // return response.json({ 'id': `${request.session.user._id}` });
    }
  }

};

function completeLogin(request, response, user) {
  console.log('completing login', user);

  request.session.user = user.toObject();
  console.log('session user', request.session.user);
  delete request.session.user.password;

  response.cookie('userID', user._id.toString());
  response.cookie('expiration', Date.now() + 90000 * 1000);

  response.json(user);
}



