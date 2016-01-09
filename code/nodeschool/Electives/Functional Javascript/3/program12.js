function Spy(target, method) {
  var result = {
    count: 0
  }

  var temp_fn = target[method];
  target[method] = function() {
    result.count++;
    return temp_fn.apply(target, arguments); //Array.prototype.slice.call(arguments)
  }
  return result
}

module.exports = Spy
