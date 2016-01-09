var http = require('http')
var through = require('through')

var tr = through(writeToUpperCase)

function writeToUpperCase (buf) {
	this.queue(buf.toString().toUpperCase())
}

var server = http.createServer(function (req, res) {
	if (req.method == 'POST') {
		// req.pipe(through(function (buf) {
		// 	this.queue(buf.toString().toUpperCase())
		// })).pipe(res)
		// req.pipe(tr).pipe(res)
		req.pipe(through(writeToUpperCase)).pipe(res)
	} else {
		res.end('Give me POST.')
	}	
})
server.listen(process.argv[2])