//using strftime
var strftime = require('strftime')
var net = require('net')

var server = net.createServer(function (socket) {
	socket.end(strftime('%Y-%m-%d %H:%M') + '\n')
})
server.listen(process.argv[2])


//attempt 1
/*
var net = require('net')

function pad(n) {
	//answer solution
	return (i < 10 ? '0' : '') + n
	//my solution
	//if (n < 10) return '0' + n
	//return n
}

var server = net.createServer(function(socket) {
	var date = new Date()
	var data = 	"" + 
				date.getFullYear() + "-" +
				pad((date.getMonth() + 1)) + "-" +
				pad(date.getDate()) +
				" " +
				pad(date.getHours()) + ":" +
				pad(date.getMinutes())
	socket.end(data)
})

server.listen(process.argv[2])
*/