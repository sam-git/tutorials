var express = require('express')
var bodyParser = require('body-parser')
var app = express()

// doing it the way suggested https://www.npmjs.com/package/body-parser#express-route-specific
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/form', urlencodedParser, function(req, res) {
  res.end(req.body.str.split('').reverse().join(''))
})

console.log('listening on port ' + process.argv[2])
app.listen(process.argv[2])
