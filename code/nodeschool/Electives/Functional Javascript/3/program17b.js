function curryN(fn, n) {
  // SOLUTION GOES HERE
  var limit = n || fn.length
  var depth = 1;
  var args = [];

  function internal(current_args, depth) {
    return function out(x) {
      if (depth < limit) {
        my_args = current_args.concat(x)
        return internal(my_args,  depth + 1)  // these must be different variables to the ones in the closure.
      } else {
        return fn.apply(null, current_args.concat(x));
      }
    }
  }
  return internal(args, depth)
}

module.exports = curryN
