var concat = require('concat-stream')

process.stdin.pipe(concat(function (text) {
	text = text.toString()
	var reversed = text.split('').reverse().join('')
	console.log(reversed)
}))