var express = require("express");
console.log("Let's find out what express is", express);
const parser = require("body-parser");
const path = require("path");


const port = process.env.PORT || 8000;
console.log('port is: ', port)

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

console.log("Let's find out what app is", app);

app.get('/', function(request, response) {

   console.log("The request object", request);
   console.log("The response object", response);

   response.send("<h1>THIS. IS. Cats!</h1>");
})
app.get('/cats', function(request, response) {
    response.render('cats')
})
app.get("/murphy", function (request, response){
    // hard-coded user data
    var cat_array = [
        {img: 'cat1.jpg', name: "Murphy", age: "3", toy: "penguin"}];
    var food = ["cheerios", "apples", "carrots"]
    response.render('details', {cat_array: cat_array, food});
})

app.get("/skittles", function (request, response){
    // hard-coded user data
    var cat_array = [
        {img: 'cat2.jpg', name: "Skittles", age: "10", toy: "giraffe", food: "bacon"}]
    var food = ["fruit loops", "pizza", "snickers"]
    response.render('details', {cat_array: cat_array, food});
})


app.use(parser.urlencoded({extended: true}));

app.listen(port, function() {
  console.log("listening on port 8000");
});