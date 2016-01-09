var combine = require('stream-combiner')
var split = require('split')
var through = require('through')
var zlib = require('zlib')

module.exports = function () {
	tr = through(write, end)
	var genre

	function write(buf){
		if (buf.length == 0) {
			return
		}
		var book = JSON.parse(buf)
		if (book.type == 'genre') {
			if (genre) {
				this.queue(JSON.stringify(genre) + '\n')
			}
			genre = {name: book.name, books: []}
		} else if (book.type == 'book') {
			genre.books.push(book.name)
		}
	}

	function end() {
		if (genre) {
			this.queue(JSON.stringify(genre) + '\n')
		}
		this.queue(null)
	}

	return combine(
		// process.stdin
		split()
		,tr
		,zlib.createGzip()
		// ,process.stdout
	)
}