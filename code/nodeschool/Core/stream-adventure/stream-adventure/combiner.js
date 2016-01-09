var combine = require('stream-combiner')
var through = require('through')
var split = require('split')
var zlib = require('zlib')

module.exports = function () {
    var genre_books

    return combine(
        split(), through(write, end), zlib.createGzip()
    ).on('error', function (err) {
    	console.log('error!!!')
    //syntax errors will land here
    //note, this ends the stream.
  })

    function write(str) {
    	if (str.length == 0) {
    		return
    	}
    	obj = JSON.parse(str)
    	if (obj.type === 'genre') {
    		if (genre_books) {
    			this.queue(JSON.stringify(genre_books) + '\n')
    		}
    		genre_books = {
    			name: obj.name,
    			books: []
    		}
    	}
    	else if (obj.type === 'book') {
    		genre_books.books.push(obj.name)	
    	}
    }

    function end() {
    	this.queue(JSON.stringify(genre_books) + '\n')
    	this.queue(null)
    }
}
