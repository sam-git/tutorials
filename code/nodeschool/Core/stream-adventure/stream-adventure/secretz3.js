var crypto = require('crypto')
var zlib = require('zlib')
var tar = require('tar')
var through = require('through')

var algorithm = process.argv[2]
var password = process.argv[3]
var decipher = crypto.createDecipher(algorithm, password)

var parser = tar.Parse()
parser.on('entry', function (e) {
	if (e.type == 'File') {
		var hash = crypto.createHash('md5', {encoding: 'hex'})
		e.pipe(hash).pipe(through(null, end)).pipe(process.stdout)

		function end () { this.queue(' ' + e.path + '\n') }
	}
})

process.stdin.pipe(decipher).pipe(zlib.createGunzip()).pipe(parser)