var tar = require('tar')
var crypto = require('crypto')
var zlib = require('zlib')
var through = require('through')

var ciper_name = process.argv[2]
var cipher_passphrase = process.argv[3]

// var sam = through(function(entry) {
// 	console.log(entry.path)
// 	this.queud(entry)
// })

// sam.pipe(hash).pipe(process.stdout)

var parser = tar.Parse();
parser.on('entry', function (e) {
	if (e.type === 'File') {
		// process.stdout.write(e.path)

		var hash = crypto.createHash('md5', { encoding: 'hex' })
		e.pipe(hash).pipe(through(null, function() {
			this.queue(' ' + e.path + '\n')
			
		})).pipe(process.stdout)
	}
    // .pipe(hash)
	// .pipe(process.stdout)
});

process.stdin
	.pipe(crypto.createDecipher(ciper_name, cipher_passphrase))
	.pipe(zlib.createGunzip())
	.pipe(parser)





// var tar = require('tar');
// var parser = tar.Parse();
// parser.on('entry', function (e) {
//     console.dir(e);
// });
// var fs = require('fs');
// fs.createReadStream('file.tar').pipe(parser);