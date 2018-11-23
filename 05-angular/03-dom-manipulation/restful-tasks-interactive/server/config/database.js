const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const modelsPath = path.resolve('server/models');

mongoose.connect('mongodb://localhost:27017/tasks',
  {
    useCreateIndex: true,
    useNewUrlParser: true
  });

mongoose.connection.on('connected', () => console.log('connected to MongoDB'));

fs.readdirSync(modelsPath)
  .filter(file => file.endsWith('.js')).forEach(file => {
  require(path.join(modelsPath, file));
});
