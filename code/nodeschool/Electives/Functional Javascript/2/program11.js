// module.exports = function arrayMap(arr, fn) {
//   // SOLUTION GOES HERE
//     return arr.reduce(function(prev, curr, index, arr){
//         console.log(prev)
//         x = prev.concat(fn(curr));
//         return x;
//     }, [])
//
// }


module.exports = function arrayMap(arr, fn) {
  // SOLUTION GOES HERE
    return arr.reduce(function(newArr, item, index, arr){
        return newArr.concat(fn(item));
    }, [])
}