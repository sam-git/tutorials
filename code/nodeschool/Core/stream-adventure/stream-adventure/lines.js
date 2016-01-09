var split = require('split')
var through = require('through')
var bool = true

process.stdin.pipe(split()).pipe(through(v2));

function v1 (line) {
	// console.log(typeof(line))
	if (bool)
		console.dir(line.toString().toLowerCase());
	else
		console.dir(line.toString().toUpperCase());
	bool = !bool
}

function v2 (line) {
	console.log(bool ? line.toLowerCase() : line.toUpperCase())
	bool = !bool
}