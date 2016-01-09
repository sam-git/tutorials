var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {
	fs.readdir(dir, function(err, list) {
		if (err) {
			return callback(err)
		}
		list = list.filter(function(file) {
			return path.extname(file) === '.' + filterStr
		})
		callback(null, list)
	})
}

// my solution
/*
module.exports = function (dir, ext, callback) {
	fs.readdir(dir, function (err, list) {
		if (err) {
			callback(err)
		} else {
			files = []
			list.forEach(function(file){
				if (path.extname(file) === '.' + ext) {
					files.push(file)
				}
			})
			callback(null, files)
		}
    })
}
*/