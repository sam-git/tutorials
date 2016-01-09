var express = require('express')
var fs = require('fs')
var app = express()

app.get('/books', function(req, res){
  fs.readFile(process.argv[3], function(err, data) {
    books = JSON.parse(data)
    res.send(books)
  })
})

var port = process.argv[2] || '8080'
console.log('listening on port ' + port)
app.listen(port)
