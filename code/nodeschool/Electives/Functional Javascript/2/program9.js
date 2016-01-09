var slice = Array.prototype.slice

function logger(namespace) {
  // SOLUTION GOES HERE
    return function() {
        console.log.apply(null, [namespace].concat(Array.prototype.slice.call(arguments)))
    }
}

module.exports = logger



//official
var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    console.log.apply(console, [namespace].concat(slice.call(arguments)))
  }
}

module.exports = logger