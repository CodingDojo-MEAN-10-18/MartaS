// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);
// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
    // just for fun, take a look at the request and response objects
   console.log("The request object", request);
   console.log("The response object", response);
   // use the response object's .send() method to respond with an h1
   response.send("<h1>Welcome to Cars and Cats</h1>");
})
app.use(express.static("static"));

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})



/*
var express = require("express");
var app = express();

app.get('/', function(request, response) {
        // just for fun, take a look at the request and response objects
       console.log("The request object", request);
       console.log("The response object", response);
       // use the response object's .send() method to respond with an h1
       response.send("<h1>Hello Express</h1>");
    })
// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it

// tell your server which port to run on
server.listen(5000);
// print to terminal window
console.log("Running in localhost at port 5000");


// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cars.html") {
         fs.readFile('views/cars.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
        }
    else if (request.url === "/images/teal-truck.jpg") {
         fs.readFile('images/teal-truck.jpg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/images/vintage-ford-truck-2.jpg") {
        fs.readFile('images/vintage-ford-truck-2.jpg', function (errors, contents){
           response.writeHead(200, {'Content-type': 'image/jpg'});
           response.write(contents); 
           response.end();
       });
   }
    else if (request.url === "/cats.html") {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/images/cat1.jpg") {
        fs.readFile('images/cat1.jpg', function (errors, contents){
           response.writeHead(200, {'Content-type': 'image/jpg'});
           response.write(contents); 
           response.end();
       });
   }
   else if (request.url === "/images/cat2.jpg") {
    fs.readFile('images/cat2.jpg', function (errors, contents){
       response.writeHead(200, {'Content-type': 'image/jpg'});
       response.write(contents); 
       response.end();
        });
    }
    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
         response.writeHead(200, {'Content-type': 'text/css'});
         response.write(contents);
         response.end();
        });
      }
    else if (request.url === "/cars/new.html") {
       fs.readFile('views/new.html', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write(contents); 
        response.end();
        });
    }
    // request didn't match anything:
    else {
        response.end('URL requested was not found!!!');
    }
});
*/