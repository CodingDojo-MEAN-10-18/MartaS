const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
// const modelsPath = path.resolve('server', 'models');
const modelsPath = path.join(__dirname, '../models');
const reg = new RegExp('\\.js$', 'i');
// const dbURI = 'mongodb://localhost/1955API';

// mongoose.connect(dbURI, {useNewUrlParser: true });
mongoose.connect('mongodb://localhost/1955API');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));

mongoose.Promise = global.Promise;

/*

mongoose.connection.on('connected', () => {
    console.log('mongoose connected to ${ dbURI }');
})

mongoose.connection.on('error', err => {
    console.log('mongoose connection error ${ err }');
    process.exit(0);
})

mongoose.connection.on('disconnect', () => {
    console.log('mongoose disconnected');
})

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('mongoose disconnected');
        process.exit(0)
    }
    )
})
*/
fs.readdirSync(modelsPath).forEach(model => {
  if (reg.test(model)) {
    require(path.join(modelsPath, model));
  }
});
