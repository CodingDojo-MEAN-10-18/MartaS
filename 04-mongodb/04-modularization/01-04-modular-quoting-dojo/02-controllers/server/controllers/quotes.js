const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    index: function(request, response) {
        console.log('index route');
        response.render('index');
    },

    create: function(request, response) {
        //console.log("POST DATA", request.body)
        let user = new User({name: request.body.name, quote: request.body.quote})
        user.save(function(error) {
            if(error) {
                console.log('something went wrong :(');
            } else {
                console.log('successfully added a user!', user);
                response.redirect('/quotes')
            }
        })
    },        
    show: function(request, response) {
        console.log('getting quote page');
        User.find({}).then(users => response.render('quotes', {users}));
    }
}