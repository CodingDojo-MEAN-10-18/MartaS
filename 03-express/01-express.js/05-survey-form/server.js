var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('index');
});
app.post('/result', function(request, response) {
    console.log(request.body)
    const data = {
        name: request.body.name,
        location: request.body.location,
        language: request.body.language,
        comment: request.body.comment,
    };
    response.render('results', { data });
});

app.listen(8000, function(){
    console.log('listening on port 8000')
})