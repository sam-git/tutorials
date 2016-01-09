var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
	res.writeHead(200, { 'content-type': 'text/plain' })

	// var file = process.argv[3]
	// var src = fs.createReadStream(file)
	// src.pipe(res)
	fs.createReadStream(process.argv[3]).pipe(res)
})

var port = process.argv[2]
server.listen(port)