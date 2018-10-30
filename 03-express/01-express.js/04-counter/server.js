var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000}
}))

app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

function addOne(req) {
    if (!req.session.count) {
        req.session.count = 1;
    }
    else {
        req.session.count = req.session.count + 1;
    }
    return req.session.count
}

app.get('/', function(req, res) {
    res.render("index", { counter: addOne(req)});
});

app.post('/bytwo', function (req, res){
    addOne(req)
    console.log('session by two', req.session.count)
    res.redirect('/')
})

app.post('/reset', function(req, res){
    req.session.count = 0;
    res.redirect('/')
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});