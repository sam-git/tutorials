var path = require('path')
var express = require('express')
var app = express()

console.log('path is ' + process.argv[3])

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
app.use(require('stylus').middleware( process.argv[3] + '/*.styl' || path.join(__dirname, 'public/*.styl')));

console.log('listening on port ' + process.argv[2])
app.listen(process.argv[2])
