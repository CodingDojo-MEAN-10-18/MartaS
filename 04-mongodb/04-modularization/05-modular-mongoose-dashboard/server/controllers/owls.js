const mongoose = require('mongoose');
const Owl = mongoose.model('Owl');

module.exports = {
    index: function(request, response) {
        Owl.find({}, function(error, owls) {
            if (error) {console.log(error)}
            response.render('index', {owls: owls});
        });
    },

    new: function(request, response) {
        console.log('add new owl page');
        response.render('new');
    },

    create: function(request, response){
        let owl = new Owl({name: request.body.name, color: request.body.color, wingspan: request.body.wingspan})
        owl.save(function(error) {
            if (error) {
                console.log('something went wrong');
            }
            else {
                console.log('successful added an owl')
                response.redirect('/')
            }
        })
    },

    update: function(request, response){
        Owl.update({_id: request.params.id}, request.body, function(error) { 
                if (error) {console.log(error); }
                response.redirect('/owls/' + request.params.id)
        });
    },

    show: function(request, response) {
        Owl.find({_id: request.params.id}, function(error, owl) {
            if (error) {console.log(error); }
        response.render('show', { owl: owl })
        })
    },

    showOne: function(request, response) {
        Owl.find({_id: request.params.id }, function(error, owl_id) {
            if (error) { console.log(error); }
        response.render('edit', { owl: owl_id[0] })
        })
    },

    destroy:  function(request, response) {
        Owl.remove({_id: request.params.id}, function(error) {
            console.log('removed owl');
        response.redirect('/')
        });
    }

}