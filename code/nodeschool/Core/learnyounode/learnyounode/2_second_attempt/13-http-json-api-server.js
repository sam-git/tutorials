//official solution
var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}


var server = http.createServer(function (req, res) {
	var parselUrl = url.parse(req.url, true)
	var time = new Date(parselUrl.query.iso)
	var result

	if (/^\/api\/parsetime/.test(req.url))
		result = parsetime(time)
	else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)


	if (result) {
		res.writeHead(200, {'Content-Type': 'application/json'})
		res.end(JSON.stringify(result))
	} else {
		res.writeHead(404)
		res.end()
	}
})
server.listen(+process.argv[2])


//my solution
/*
var http = require('http')
var url = require('url')

server = http.createServer(function(req, res) {
	var url_obj = url.parse(req.url, true)
	console.log(url_obj)

	var pathname = url_obj.pathname
	var isoString = url_obj.query.iso
	var isoDate = new Date(isoString)
	if (pathname === '/api/parsetime') {
		res.end(JSON.stringify({
			hour: isoDate.getHours(),
			minute: isoDate.getMinutes(),
			second: isoDate.getSeconds()
		}))
	}
	if (pathname === '/api/unixtime') {
		res.end(JSON.stringify({
			unixtime: isoDate.getTime()
		}))
	}
})
server.listen(process.argv[2])
*/