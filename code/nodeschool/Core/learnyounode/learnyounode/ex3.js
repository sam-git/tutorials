var fs = require('fs')
var args = process.argv;

var buf = fs.readFileSync(args[2]);
var str = buf.toString();
var strLines = str.split('\n');

console.log(strLines.length - 1);

// official answer
// console.log(fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1)