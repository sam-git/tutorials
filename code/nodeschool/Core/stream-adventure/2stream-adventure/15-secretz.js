var crypto = require('crypto')
var zlib = require('zlib')
var tar = require('tar')
var through = require('through')

var cipher = process.argv[2]
var passphrase = process.argv[3]
var decoder = crypto.createDecipher(cipher, passphrase)

var parser = tar.Parse()
parser.on('entry', function(e) {
		hasher = crypto.createHash('md5', { encoding: 'hex' })
		th = through(null, end)
		e
		.pipe(hasher)
		.pipe(th)
		.pipe(process.stdout)
	}

	function end() {
		this.queue(' '+ e.path + '\n')
	}

})

process.stdin
.pipe(decoder)
.pipe(zlib.createGunzip())
.pipe(parser)