var split = require('split')
var through = require('through')

var doUpper = false

tr = through(function(line) {
	this.queue(doUpper ? line.toUpperCase() : line.toLowerCase() )
	this.queue('\n')
	doUpper = !doUpper
})

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout)
