// var duplexer = require('duplexer')

// var split = require('split')
// var through = require('through')

// var stream = require('stream')




// module.exports = function (counter) {
// 	// console.log("HERE")
// 	// console.log(counter)
// 	// console.log(counter.setCounts(43))

// 	var countreis = {}
// 	var ws = new stream.Writable({objectMode: true})

// 	ws._write = function(chunk, enc, next) {
//         countries[chunk.country] = (countries[chunk.country] || 0) + 1;
//         next();
//     }
//     ws.on('finish', function() { counter.setCounts(countries); })

// 	// counter.pipe(ws)
// 	// console.log(ws)

// 	// // counter.pipe(split()).pipe(through(v2));

// 	// counter.pipe(ws)

	

// 	// function v2 (line) {
// 	// 	// console.log(line)
// 	// 	ws.write(line)
// 	// }

// 	// counter.on("end", function() {
// 	// 	counter.setCounts()
// 	// })

// 	return duplexer(ws, counter)
// }

var duplexer = require('duplexer');
var Writable = require('stream').Writable;

module.exports = function(counter) {
    var countries = {};
    var capturer = Writable({objectMode: true});
    capturer._write = function(chunk, enc, next) {
        countries[chunk.country] = (countries[chunk.country] || 0) + 1;
        next();
    }
    capturer.on('finish', function() { counter.setCounts(countries); })
    return duplexer(capturer, counter);
};