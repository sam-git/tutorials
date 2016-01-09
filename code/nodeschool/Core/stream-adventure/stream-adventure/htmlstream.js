var trumpet = require('trumpet')
var through = require('through')

var trp = trumpet();

// var thr = through(function(buf) {
	// var ws = trp.select('.loud').createWriteStream()
	// this.queue(buf)
// })

var loud = trp.select('.loud').createStream()

loud.pipe(through(function(buf) {
	this.queue(buf.toString().toUpperCase())
})).pipe(loud)


process.stdin.pipe(trp).pipe(process.stdout);