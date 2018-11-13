const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const mongoose = require('mongoose') 

app.use(bodyParser.urlencoded({ extended:true }))
require('./server/models/quote.js')

const path = require('path')
app.use(express.static(path.join(__dirname,"./static")));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost:27017/quote_dojo', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

require('./server/config/routes.js')(app)


app.listen(8000, function () {
    console.log("listening on port 8000");
})
