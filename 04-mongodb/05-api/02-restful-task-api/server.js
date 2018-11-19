const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000
const app = express();
const path = require('path')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + './public/dist/public'));

require('./server/config/database')
require('./server/config/routes')(app)

app.listen(port, () => console.log('listening on port ${ port }'));
