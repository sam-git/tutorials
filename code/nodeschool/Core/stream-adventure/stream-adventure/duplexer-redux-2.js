var through = require('through')
var duplexer = require('duplexer')

module.exports = function (counter) {

	var counts = {}
	var input = through(write, end)
	return duplexer(input, counter)

	function write(row) {
		// if (! countries[obj.country]) {
			// countries[obj.country] = 1;
		// } else {
			// countries[obj.country] += 1;
		// }
		counts[row.country] = (counts[row.country] || 0) + 1;
	}

	function end() {
		counter.setCounts(counts)
	}
}