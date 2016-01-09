var http = require('http')

// var get = http.get(process.argv[2], function(response) {
// 	response.on('data', function(data) {
// 		console.log(data.toString())
// 	})	
// })


var get = http.get(process.argv[2], function(response) {
	response.setEncoding('utf8')
	response.on('data', console.log)
})
