var duplexer = require('duplexer')
var through = require('through')

module.exports = function(counter) {
	var counts = {}
	var input = through(write, end);
	console.log(through)
	return duplexer(input, counter)

	function write (row) {
		console.log(typeof(row))
		counts[row.country] = (counts[row.country] || 0) + 1
	}
	function end () {
		counter.setCounts(counts)
	}
}