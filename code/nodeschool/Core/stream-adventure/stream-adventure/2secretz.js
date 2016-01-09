var tar = require('tar')


cipher_name = process.argv[2]
cipher_passphrase = process.argv[3]


var crypto = require('crypto')
var decipherer = crypto.createDecipher(cipher_passphrase, cipher_passphrase)
var zlib = require('zlib')

var parser = tar.Parse()


parser.on('entry', function (e) {
	if (e.type === 'File') {
		this.queue('we have liftoff')
	}
	e.pipe(process.stdout)
})

process.stdin.
	pipe(decipherer).
	pipe(zlib.createGunzip()).
	pipe(parser).
	pipe(process.stdout)