//verbose version of official solution

function reduce(arr, fn, initial) {
	return (function reduceOne(index, reduction_value) {
		if (index > arr.length-1) { return new_reduction_value };
		
		prev = reduction_value;
		curr = arr[index]
		new_reduction_value = fn(prev, curr, index, arr)
		nextIndex = index + 1
		return reduceOne(nextIndex, new_reduction_value)
		
	})(0, initial)
}
    
module.exports = reduce