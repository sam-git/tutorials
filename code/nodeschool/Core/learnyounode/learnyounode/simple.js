var http = require('http')
var server = http.createServer(function(req, response) {
	// response.writeHead(200, {"Content-Type": "text/html"});
	response.write("Ya Ya")
	response.end()
});

server.listen(8080)
console.log("listening on port 80")