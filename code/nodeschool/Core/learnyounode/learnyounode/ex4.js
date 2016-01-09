var fs = require('fs')
var filepath = process.argv[2]

fs.readFile(filepath, 'utf8', function(err, contents){
	if (err) throw err;
	lines = contents.split('\n').length - 1
	console.log(lines);
});