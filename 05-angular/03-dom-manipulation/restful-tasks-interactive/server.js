const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve('dist/public')));

require('./server/config/database');

app.use(require('./server/routes'));
app.listen(port, () => console.log(`listening on port ${ port }`));
