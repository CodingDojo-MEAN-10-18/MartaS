const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const models_path = path.join(__dirname, './../models')

mongoose.connect('mongodb://localhost:27017/quote_dojo', {
    useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to mongodb'));


fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
})
