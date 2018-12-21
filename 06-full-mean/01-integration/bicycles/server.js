const cookieParser = require('cookie-parser');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const logger = require('morgan');


const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('somethinghere'));
app.use(logger('dev'));
app.use(
  session({
    saveUninitialized: true,
    secret: 'SuperSecret',
    resave: false,
    name: 'session',
    rolling: true,
    cokie: {
      secure: false,
      httpOnly: false,
      maxAge: 108000000
    },
  })
);

app.use(express.static(path.resolve('dist/bicycles')));

require('./server/config/database');

app.use('/api', require('./server/routes'));
app.use(require('./server/routes/catch-all.route'));
app.listen(port, () => console.log(`listening on port ${ port }`));
