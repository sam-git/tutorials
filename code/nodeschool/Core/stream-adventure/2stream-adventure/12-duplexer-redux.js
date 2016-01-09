var duplexer = require('duplexer')
var through = require('through')

module.exports = function (counter) {

	countries = {}

	var write = function(obj){
		// console.log(obj)
		// console.dir(obj)
		// this.queue(obj)
		countries[obj.country] = countries[obj.country] ? countries[obj.country] + 1 : 1
		// counts[row.country] = (counts[row.country] || 0) + 1  //official
	}

	var end = function(){
		counter.setCounts(countries)
		// this.queue(null)
	}

	tr = through(write, end)
	tr.pipe(counter)



	return duplexer(tr, counter) //writeStream, readStream
}