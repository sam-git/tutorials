// v1 using head/tail and a single function

function reduce(arr, fn, initial) {
  if (!arr.length) return initial             // end condition
  var head = arr[0]                      // item to operate on
  // head = head.toUpperCase()                // perform action
  current = fn(initial, head)
  var tail = arr.slice(1)                // next
  // return [head].concat(toUpperArray(tail)) // recursive step
  return reduce(tail, fn, current)
}

//v2 using a nested function
function reduce(arr, fn, initial) {
  var count = arr.length;
  recursive_fn = function(index, prev) {
    if (index > count - 1) {
      return prev
    }
    prev = fn(prev, arr[index], index, arr)
    return recursive_fn(++index, prev)
  }
  return recursive_fn(0, initial)
}

//v3 after looking at answer
function reduce(arr, fn, initial) {
  return (function recursive_fn(index, prev) {
    if (index > arr.length - 1) return prev
    return recursive_fn(index + 1, fn(prev, arr[index], index, arr))
  })(0, initial)
}

module.exports = reduce
