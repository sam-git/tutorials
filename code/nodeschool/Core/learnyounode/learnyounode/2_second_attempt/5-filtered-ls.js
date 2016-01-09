var fs = require('fs')
var path = require('path')

var dir = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(dir, function(err, list) {
	for (var i = 0; i < list.length; i++) {
		file = list[i]
		if (path.extname(file) == ext) {
			console.log((file))	
		}
	};
})