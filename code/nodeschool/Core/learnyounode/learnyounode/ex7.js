http = require('http')

url = process.argv[2]

http.get(url, function(response) {
	response.setEncoding('utf8')
	response.on('data', function(data){
		console.log(data)
		console.log('\n\n\n\n\nTIMMY!!!!!!!!!\n\n\n\n\n\n')
	})
	response.on('error', console.error)
})

// console.log(a)

/*
http.get(url, function(response) {
	response.setEncoding('utf8')
	response.on('data', console.log)
	response.on('error', console.error)
})
*/

/*
http.get(url, function(response) {
	response.on("data", function(data){
		console.log(data.toString())
	})
	// response.on("error", function(err){
	// 	console.log(err)
	// })
})
*/