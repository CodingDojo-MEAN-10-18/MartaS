const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const server = app.listen(1337);
const io = require('socket.io')(server);
const session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './views')));
app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000}
}))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.get('/', function(request, response) {
    response.render('index');
});

var counter = 0;

io.on('connection', function(socket){
    socket.emit('greeting', {msg: 'Greetings, from server Node, brought to you by sockets! - server' });
    socket.on('thankyou', function(data){
        console.log(data.msg)
    })
    socket.on('adding_count', function() {
        counter += 1;
        socket.emit('announce_count', counter);
        console.log(counter);
    });
    socket.on('resetting_count', function() {
        counter = 0;
        socket.emit('announce_count', counter);
        console.log(counter)
    })
});

