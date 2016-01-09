var trumpet = require('trumpet')
var through = require('through')

var tr = trumpet();
var st = trumpet();
var uv = trumpet();

process.stdin.pipe(tr).pipe(st).pipe(uv).pipe(process.stdout)

// var stream = tr.select('.loud').createStream()


st.selectAll('title', function (title) {
	title.createWriteStream().end('Ronnie')
})


tr.selectAll('p', function (p) {
	// x = p.createWriteStream()
	// x.end('\nWHAAA\n')
	p.createWriteStream().end('\nWHAAA\n')
})

uv.selectAll('p', function (p) {
	stream = p.createStream()
	stream.pipe(through(function(buf) {
		this.queue(buf.toString().toLowerCase())
	})).pipe(stream)
})


// lll.end('\nWHAAA\n')

// stream.pipe(through(function(line) {
	// this.queue(line.toString().toUpperCase())
// })).pipe(stream)