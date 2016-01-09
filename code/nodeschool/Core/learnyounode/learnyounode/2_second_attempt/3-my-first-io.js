var fs = require('fs')

file = fs.readFileSync(process.argv[2])
count = file.toString().split('\n').length - 1
console.log(count)