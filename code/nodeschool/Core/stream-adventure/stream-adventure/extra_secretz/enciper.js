var crypto = require('crypto')

var cipher = crypto.createCipher('aes256', 'pass')

process.stdin.pipe(cipher).pipe(process.stdout)