var fs = require('fs')
var path = require('path')

module.exports = function(dir, ext, callback) {
	fs.readdir(dir, function(err, list) {
		if (err) {
			return callback(err)
		}
		// var files = []
		// for (var i = 0; i < list.length; i++) {
			// file = list[i]
			// if (path.extname(file) == '.' + ext) {
				// files.push(list[/i])print 
			// }
		// };
		list = list.filter(function(file) {
			return path.extname(file) === '.' + ext
		})

		return callback(null, list)
	})
}