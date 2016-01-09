var path = require('path')
var express = require('express')
var app = express()

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public')));

console.log('listening on port ' + process.argv[2])
app.listen(process.argv[2])
