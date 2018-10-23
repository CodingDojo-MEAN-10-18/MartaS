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
// tell your server which port to run on
server.listen(5000);
// print to terminal window
console.log("Running in localhost at port 5000");
