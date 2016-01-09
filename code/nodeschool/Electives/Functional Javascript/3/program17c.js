// function curryN(fn, n) {
//   n = n || fn.length
//   return function curriedN(arg) {
//     if (n <= 1) return fn(arg)
//     return curryN(fn.bind(this, arg), n - 1)
//   }
// }
//
// module.exports = curryN

//my typing out of official solution - use BIND!

function curryN(fn, n) {
  // SOLUTION GOES HERE
  n = n || fn.length
  return function (arg) {
    if (n <= 1) return fn(arg)
    return curryN(fn.bind(null, arg), n - 1)
  }
}

module.exports = curryN
