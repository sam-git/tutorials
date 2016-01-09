var express = require('express')
var app = express()

app.get('/search', function(req, res) {
  res.send(req.query)
})

console.log('listening on port ' + process.argv[2])
app.listen(process.argv[2])
