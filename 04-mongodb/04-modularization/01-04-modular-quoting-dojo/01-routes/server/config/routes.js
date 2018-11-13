const mongoose = require('mongoose');
const User = mongoose.model('User')
module.exports = function(app) {

    app.get('/', function(request, response) {
        response.render('index');
    })

    app.get('/quotes', function(request, response) {
        console.log('getting quote page');
        User.find({}).then(users => response.render('quotes', {users}));
    });
        
    app.post('/quotes', function(request, response) {
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
    })
}