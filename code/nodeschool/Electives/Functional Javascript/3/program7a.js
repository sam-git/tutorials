function reduce(arr, fn, initial) {
  if (arr.length === 0) return initial
  head = arr[0]
  reducto = fn(initial, head)
  tail = arr.slice(1)
  return reduce(tail, fn, reducto)
}

function reduce(arr, fn, initial) {
  if (!arr.length) return initial
  return reduce(arr.slice(1), fn, fn(initial, arr[0]))
}

function reduce(arr, fn, initial) {
  return (function reducto(index, value) {
    if (index >= arr.length) return value
    new_value = fn(value, arr[index], index, arr)
    return reducto(index + 1, new_value)
  })(0, initial)
}

module.exports = reduce
