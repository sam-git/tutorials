//never got this one working.

function curryN(fn, n) {
  // SOLUTION GOES HERE
  var limit = n || fn.length
  // console.log('limit', limit)
  var depth = 0;
  var args = [];



  function blah(x) {

    ++depth;
    // console.log('depth', depth)
    if (depth >= limit) {
      v = args.concat(x)
      return fn.apply(fn, v);
    } else {
      args.push(x);
      return blah;
    }
  }

  return blah;

}

module.exports = curryN
