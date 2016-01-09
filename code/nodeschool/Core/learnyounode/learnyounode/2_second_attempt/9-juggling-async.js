//using after
var after = require('after')
var request = require('request')

var url_count = 3
var responses = []
var next = after(url_count, printResponses)

function get(index) {
	request(process.argv[2 + index], function(err, res, body) {
		responses[index] = body
		next()
	})
}

function printResponses() {
	for (var i = 0; i < responses.length	; i++) {
		console.log(responses[i])
	}
}

for (var i = 0; i < url_count; i++) {
	get(i)
};


//using async
/*
async = require('async')
request = require('request')
var url_count = 3

function get(index, callback) {
	request(process.argv[2 + index], function(err, res, body) {
		if (err) {
			return callback(err)
		}
		callback(null, body)
	})
}

function closure(i) {
	return function(callback) {
		get(i, callback)
	}
}

function printResponses(err, results) {
	for (var i = 0; i < results.length; i++) {
		console.log(results[i])
	}
}

var tasks = []
for (var i = 0; i < url_count; i++) {
	tasks.push(closure(i))
}
async.parallel(tasks, printResponses)
*/


//second attempt
/*
request = require('request')

var url_count = 3
var completed_count = 0
var responses = []

function get(index) {
	request(process.argv[2 + index], function(err, res, body) {
		responses[index] = body
		requestComplete()
	})
}

function requestComplete() {
	if (++completed_count == url_count) {
		printResponses()
	}
}

function printResponses() {
	for (var i = 0; i < url_count; i++) {
		console.log(responses[i])
	}
}

for (var i = 0; i < url_count; i++) {
	get(i)
};
*/

//first attempt
/*
request = require('request')

var urls = [process.argv[2], process.argv[3], process.argv[4]]
var responses = ["x", "y", "z"]
var completed = 0

function get(index) {
	request(urls[index], function(err, res, body) {
		responses[index] = body
		requestComplete(index)
	})
}

function requestComplete(xx) {
	if (++completed == urls.length) {
		for (var i = 0; i < urls.length; i++) {
			console.log(responses[i])
		}
	}
}

for (var i = 0; i < urls.length; i++) {
	get(i)
};
*/