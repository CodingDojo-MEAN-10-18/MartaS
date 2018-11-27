const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve('dist/weather-api')));

require('./server/config/database');

app.use(require('./server/routes'));
app.use(require('./server/routes/catchAll.route'));
app.listen(port, () => console.log(`listening on port ${ port }`));
