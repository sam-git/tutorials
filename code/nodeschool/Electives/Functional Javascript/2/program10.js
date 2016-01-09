module.exports = function(namespace) {
  // SOLUTION GOES HERE
    var log = console.log;
    var boundLog = log.bind(undefined, namespace)
    return function() {
        boundLog.apply(null, Array.prototype.slice.call(arguments))
    }
}

//official solution
module.exports = function(namespace) {
  return console.log.bind(console, namespace)
}