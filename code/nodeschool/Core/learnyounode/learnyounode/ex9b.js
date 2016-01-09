var http = require('http')
var bl = require('bl')
var results = []
var count = 0

// var url_1 = process.argv[2]
// var url_2 = process.argv[3]
// var url_3 = process.argv[4]

function printResults() {
	for (var i = 0; i < 3; i++) {
		console.log(results[i])
	}
}

function httpGet(i) {
	http.get(process.argv[i+2], function(response) {
		response.pipe(bl(function(err, data) {
			if (err)
				return console.error(err)
			results[i] = data.toString()
			count ++
			if (count == 3) {
				printResults()
			}
		}))
	})
}

for (var i = 0; i < 3; i++) {
	httpGet(i)
}


// var first_url_index = 2
// for (var i = first_url_index; i < first_url_index + 3; i++) {
// 	urls.push(process.argv[i])
// 	responses.push(null)
// }
// var response_count = 0

// for (var i = 0; i < urls.length; i++) {
// 	do_it(i)
// }

// function do_it(l) {
// 	var i = l
// 	http.get(urls[l], function(response) {
// 		var ii = i
// 		response.pipe(bl(function (err, data) {
// 			if (err) 
// 				return console.error(err)
// 			response_received(ii, data)
// 		}))
// 	})
// }

// function response_received(url_index, data) {
// 	responses[url_index] = data.toString()
	
// 	if (response_count == responses.length - 1) {
// 		for (var i = 0; i < 3; i ++) {
// 			console.log(responses[i])
// 		}
// 	}
// 	response_count ++
// }