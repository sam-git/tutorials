var fs = require('fs')
var path = require('path')

var dir = process.argv[2]
var ext = process.argv[3]

fs.readdir(dir, function(err, files){
	if (err) throw err;
	for (var i = 0; i < files.length; i++) {
		file = files[i]
		if (path.extname(file) === '.' + ext ) {
			console.log(file)
		}
	};
});

// solution
/*
var fs = require('fs')
    var path = require('path')
    
    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })

*/