module.exports = function arrayMap(arr, fn) {
  return arr.map(function(x){
    return fn(x);
  })
}

// module.exports = function arrayMap(arr, fn, t) {
//   return arr.reduce(function(list, item){
//     list.push(fn.call(t, item));
//     return list
//   }, [])
// }

//this one fails because it uses concat??? - something to do with shallow copying?
module.exports = function arrayMap(arr, fn, t) {
  var x = arr.reduce(function(list, item){
    return list.concat(fn(item));
  }, [])
  console.log(x)
  return x
}
