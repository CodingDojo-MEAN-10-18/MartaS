const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var path = require('path');
const server = app.listen(1337);
const io = require('socket.io')(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './views')));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'));


app.get('/', function(request, response) {
    response.render('index');
});

io.on('connection', function (socket) {
    socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' });
    socket.on('thankyou', function (data) {
        console.log(data.msg);
    });
    
    socket.on('posting_form', function(data){
        var random_number = (Math.floor(Math.random() * 1000) + 1);
        console.log(random_number);

        socket.emit('random_number', {response: random_number});
        socket.emit('updated_message', {response: data});
    });
})
    
    
        

