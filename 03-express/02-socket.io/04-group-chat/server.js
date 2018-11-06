const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var app = express();
const server = app.listen(1337);
const io = require('socket.io')(server);
const session = require('express-session');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './views')));
app.use(session( {
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 6000}
}))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.get('/', function(request, response) {
    response.render('index');
})

let messages = []
let users = []

io.on('connection', function(socket){
    socket.on('got_a_new_user', function(data){
        console.log('server', data.name)
        users.push(data.name)

        io.emit('display_messages', { current_user: data.name, messages: messages })
        
        io.emit('existing_users', { users: users})
        })

        socket.on('posting_message', function(data){
            //var message = data;
            let user = data.name    
            messages.push({ name: user, message: data.msg })
            io.emit('display_messages', {current_user: user, messages: messages})
            //io.emit('post_new_message', {current_user: user, messages: messages})
            //io.emit('post_new_message', { new_message: data.message, name: data.name })
        })
        

})