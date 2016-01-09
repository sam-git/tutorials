function countWords(inputWords) {
	return inputWords.reduce(function(previousValue, currentValue, index, array) {
		previousValue[currentValue] = previousValue[currentValue] + 1 || 1
		return previousValue 
	}, {})
}

module.exports = countWords


// official soluition

// function countWords(arr) {
//   return arr.reduce(function(countMap, word) {
//     countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
//     return countMap
//   }, {}) // second argument to reduce initialises countMap to {}
// }
//
// module.exports = countWords