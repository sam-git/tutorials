//v1 using request
///*
var request = require('request')
request(process.argv[2], function(err, res, body) {
	console.log(body.length)
	console.log(body)
})
//*/

//v2 using http and manually joiing
/*
var http = require('http')
var get = http.get(process.argv[2], function(response) {
	response.setEncoding('utf8')
	var str = "";
	response.on('data', function(data) {
		str += data.toString()
	})
	response.on('end', function(){
		console.log(str.length)
		console.log(str)
	})
})
*/

//v3 using http and bl
/*
var http = require('http')
var bl = require('bl')

var get = http.get(process.argv[2], function(res){
	res.pipe(bl(function(err, data) {
		if (err) {
			return console.error(err)
		}
		data = data.toString()
		console.log(data.length)
		console.log(data)
	}))
})
*/

//v4 using concat-stream
/*
var concatStream = require('concat-stream')
var http = require('http')

http.get(process.argv[2], function(res){
	res.pipe(concatStream(function(data){
		data = data.toString()
		console.log(data.length)
		console.log(data)
	}))
})
*/