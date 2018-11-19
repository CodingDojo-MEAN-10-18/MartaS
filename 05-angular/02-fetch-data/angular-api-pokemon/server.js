const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path')
const port = process.env.PORT || 8000
const app = express();



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, './public/dist/public')));

require('./server/config/database')
require('./server/config/routes')(app)

app.listen(port, () => console.log('listening on port ${ port }'));
