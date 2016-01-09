var http = require('http')
var url = require('url')

function parsetime(d) {
	return {
		"hour": d.getHours(),
		"minute": d.getMinutes(),
		"second": d.getSeconds()
	}
}

function unixtime(d) {
	return {"unixtime": d.getTime() }
}

var server = http.createServer(function (req, res) {
	
	var parsedUrl = url.parse(req.url, true)
	var time = new Date (parsedUrl.query.iso)
	var result

	if (parsedUrl.pathname === '/api/unixtime')
		result = unixtime(time)
	else if (parsedUrl.pathname === '/api/parsetime')
		result = parsetime(time)

	if (result) {
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.end(JSON.stringify(result))
	} else {
		res.writeHead(404)
		res.end()
	}
})

var port = Number(process.argv[2])
server.listen(port)