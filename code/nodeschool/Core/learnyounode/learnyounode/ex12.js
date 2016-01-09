var http = require('http')
var fs = require('fs')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
	console.log(req.body)
	
	if (req.method != 'POST') {
		res.end('send me a POST\n')
	}
	console.log(req.method)
	req.pipe(map(function (chunk) {
  		return chunk.toString().toUpperCase()
	})).pipe(res)
})

var port = process.argv[2]
server.listen(port)