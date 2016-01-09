var express = require('express')
var app = express()

var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', function(req, res) {
  // console.log(req.body);
  // res.end('');
  res.end(req.body.str.split('').reverse().join(''))
})

console.log('listening on port ' + process.argv[2])
app.listen(process.argv[2])
