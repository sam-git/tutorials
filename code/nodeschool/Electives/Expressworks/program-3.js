var path = require('path')
var express = require('express')
var app = express()

app.set('views', process.argv[3] || path.join(__dirname, 'templates'))
// app.set('views', path.join(__dirname, 'templates'))

app.set('view engine', 'jade')

app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})

console.log('listening on port ' + process.argv[2])
app.listen(process.argv[2])
