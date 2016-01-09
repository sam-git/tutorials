//soluting using through2-map
var http = require('http')
var map = require('through2-map')

var server = http.createServer(function(req, res) {
	if (req.method != 'POST') 
		return res.end('send me a POST\n')
	req.pipe(map(function(chunk) {
		return chunk.toString().toUpperCase()
	})).pipe(res)
})
server.listen(process.argv[2])


//my solution using 'through'
/*
var http = require('http')
var through = require('through')

var server = http.createServer(function(req, res) {
	if (req.method != 'POST') 
		return res.end('send me a POST\n')
	req.pipe(through(function(buf) {
		this.queue (buf.toString().toUpperCase())
	})).pipe(res)
})
server.listen(process.argv[2])
*/