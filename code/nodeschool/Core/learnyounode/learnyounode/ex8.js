var bl = require('bl')
var http = require('http')

url = process.argv[2]

http.get(url, function(response) {
	// response.setEncoding('utf8')
	// response.on('data', bl.append)
	// response.on('error', console.error)
	// response.on('end', function(end){
		// consoole.log(bl.toString('ascii'))
	// })
	response.pipe(bl(function (err, data) {
		if (err) 
			return console.error(err)
		data = data.toString()
		console.log(data.length)
		console.log(data)
	}))
})