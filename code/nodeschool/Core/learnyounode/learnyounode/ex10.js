var net = require('net')

function zerofill(n) {
	return (n < 10 ? '0' : '') + n
}

function now() {
	var d = new Date()
	return d.getFullYear() + '-'
		+ zerofill(d.getMonth() + 1) + '-'
		+ zerofill(d.getDate()) + ' '
		+ zerofill(d.getHours()) + ':'
		+ zerofill(d.getMinutes())
}

var server = net.createServer(function (socket) {
	socket.end(now() + '\n')
})

server.listen(process.argv[2])




// "My solution"
// var net = require('net')

// function pad(n) {
// 	padd = ""
// 	if (n <= 9)
// 		padd = "0"
// 	return padd + n
// }

// var server = net.createServer(function (socket) {
// 	var str = ""
// 	date = new Date()
// 	str += date.getFullYear()
//     str += "-" + pad((date.getMonth() + 1))     // starts at 0
//     str += "-" + pad(date.getDate())      // returns the day of month
//     str += " " + pad(date.getHours())
//     str += ":" + pad(date.getMinutes())
// 	socket.end(str)
// })

// server.listen(process.argv[2])