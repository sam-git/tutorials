var express = require('express')
var app = express()

app.put('/message/:id', function(req, res) {
  var str = require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + req.params.id)
      .digest('hex')
  res.end(str)
})

console.log('listening on port ' + process.argv[2])
app.listen(process.argv[2])
