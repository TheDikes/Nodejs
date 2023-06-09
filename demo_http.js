//AS A WEB SERVER
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
res.write('Hello World!'); //write a response to the client
res.end(); //end the response
}).listen(8080); // the server object listens on port 8080





//AS HTTP HEADER - displayed as HTML
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'}); //200 means all is OK, and the sec arg. is an obj containing the response headers.
res.write('Hello World!'); //write a response to the client
res.end(); //end the response
}).listen(8080); // the server object listens on port 8080