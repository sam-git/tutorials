 var mymodule = require('./ex6module.js')

var dir = process.argv[2]
var ext = process.argv[3]
 mymodule(dir, ext, function(err, data){
 	if (err) {
 		console.log('there was an error')
 	} else {
	 	data.forEach(function(file){
	 		console.log(file)
	 	})
	}
 })