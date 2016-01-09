var crypto = require('crypto');

process.stdin
	.pipe(crypto.createDecipher('aes256', process.argv[2]))
	.pipe(process.stdout);

// var ciphers = crypto.getCiphers();
// console.log(ciphers); // ['AES-128-CBC', 'AES-128-CBC-HMAC-SHA1', ...]


