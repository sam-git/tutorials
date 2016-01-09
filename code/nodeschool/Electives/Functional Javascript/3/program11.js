module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(prev, item, index, arr) {
    prev.push(fn(item, index, arr));
    return prev
  }, [])
}

// module.exports = function arrayMap(arr, fn) {
//   // SOLUTION GOES HERE
//     return arr.reduce(function(newArr, item, index, arr){
//         return newArr.concat(fn(item));
//     }, [])
// }                                                                                                                            s


// module.exports = function map(arr, fn) {
  // return arr.reduce(function(acc, item, index, arr) {
    // return acc.concat(fn(item, index, arr))
  // }, [])
// }
