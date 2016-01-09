function reduce(arr, fn, initial) {
	if (!arr.length) 
		return initial             // end condition
	var head = arr[0]
	initial = fn(initial, head)
	var tail = arr.slice(1)                // next
	return reduce(tail, fn, initial )
}

module.exports = reduce