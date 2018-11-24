const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const modelsPath = path.join(__dirname, '../models');
const reg = new RegExp('\\.js$', 'i');

mongoose.connect('mongodb://localhost/authors',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  }
);
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

mongoose.promise = global.Promise;

fs.readdirSync(modelsPath).forEach(model => {
  if (reg.test(model)) {
    require(path.join(modelsPath, model));
  }
});
