var tar = require('tar')
var through = require('through')

// cipher_name = process.argv[2]
// cipher_passphrase = process.argv[3]


var crypto = require('crypto')
var decipherer = crypto.createDecipher('aes256', 'pass')
var zlib = require('zlib')

var parser = tar.Parse()


parser.on('entry', function (e) {
	if (e.type === 'File') {
		// console.log('here\n')
		// console.log('we have liftoff')
		var hash = crypto.createHash('md5', { encoding: 'hex' })
		e.pipe(hash).pipe(through(null, function() {
			this.queue(' ' + e.path + '\n')
			// this.queue(null)
		})).pipe(process.stdout)
	}
	// e.pipe(process.stdout)
})

process.stdin.
	pipe(decipherer).
	pipe(zlib.createGunzip()).
	pipe(parser)//.
	// pipe(process.stdout)