var http = require('http');

// Create a web server

http.createServer
    // when somebody connect to the server and to port 8080, shows the following:
    // Event based development 
    function (req,res){


 // 1) Show a simple text (json, website)
	res.writeHead(200, {'Content-type':'text/plain'});
	// 2) The text is Hello node
	res.end('Hello Node!');

	// wait at port 8080
}).listen(8080);

// When the server is launched show this message..

console.log('Server started om localhost:8080; press Ctrl + C to terminate');





