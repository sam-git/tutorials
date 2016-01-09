function countWords(inputWords) {
	return inputWords.reduce(function(counter, word, index, array) {
		counter[word] = ++counter[word] || 1;
		return counter;
	}, {})
}
   
module.exports = countWords




// TypeError: Cannot read property 'apply' of undefined

// function countWords(inputWords) {
// 	return inputWords.reduce(function(counter, word) {
// 		if counter[word] {
// 			counter[word]++;
// 		} else {
// 			counter[word] = 1;
// 		}
// 	}, {})
// }
//
// module.exports = countWords
 
//SOLVED: no return statement
