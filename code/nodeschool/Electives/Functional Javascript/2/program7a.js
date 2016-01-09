function reduce(arr, fn, initial) {
    return (function ahoy(previousValue, currentValue, index, array) {
        if (index > arr.length) return previousValue;
        
        previousValue = fn(previousValue, currentValue, index, array);
        
        return ahoy(previousValue, array[index], index+1, array)
        
    })(initial, arr[0], 1, arr)
}

module.exports = reduce

//my first solution

// function reduce(arr, fn, initial) {
//     if (!arr.length) return initial;
//     var head = arr[0];
//     var tail = arr.slice(1);
//     return reduce(tail, fn, fn(initial, head));
// }
//
// module.exports = reduce


//official solution

function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value // end condition
    return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
  })(0, initial) // IIFE. kick off recursion with initial values
}

module.exports = reduce