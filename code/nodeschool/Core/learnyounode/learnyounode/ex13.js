var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
	

	var s = url.parse(req.url, true)
	// console.log("huh?" + req.url)
	// console.log(s.pathname)
	// console.log(s)

	if (s.pathname === '/api/unixtime') {
		res.writeHead(200, { 'Content-Type': 'application/json' })
		// console.log('yap')
		var d = new Date(s.query.iso)
		res.end(JSON.stringify({"unixtime": Number(d) } ) )

	} else if (s.pathname === '/api/parsetime') {
		res.writeHead(200, { 'Content-Type': 'application/json' })
		// console.log("yepp")
		var d = new Date(s.query.iso)
		res.end(JSON.stringify({
			"hour": d.getHours(),
			"minute": d.getMinutes(),
			"second": d.getSeconds()
		}))
	} else {
		res.end('me')
	}
	
})

var port = process.argv[2]
server.listen(port)