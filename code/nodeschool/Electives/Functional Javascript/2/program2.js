function repeat(operation, num) {
	(function recurse(count) {
		if (count >= num) {
			return;
		}
		operation();
		recurse(++count)
	})(0)
}

// Do not remove the line below
module.exports = repeat


//official solution
// function repeat(operation, num) {
//   if (num <= 0) return
//   operation()
//   return repeat(operation, --num)
// }
//
// module.exports = repeat
