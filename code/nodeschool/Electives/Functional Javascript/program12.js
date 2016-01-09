function Spy(target, method) {
    result = {}
    result.count = 0;
    original = target[method]
    target[method] = function(){
        result.count++
        // console.log('cling')
        // console.log(count)

        // console.log(result)
        return original.apply(this, Array.prototype.slice.call(arguments))
    }
    console.log('here')
    
    
    return result
}

Spy.count = 12;

module.exports = Spy


//official solution


/*
    function Spy(target, method) {
      var originalFunction = target[method]
    
      // use an object so we can pass by reference, not value
      // i.e. we can return result, but update count from this scope
      var result = {
        count: 0
      }
    
      // replace method with spy method
      target[method] = function() {
        result.count++ // track function was called
        return originalFunction.apply(this, arguments) // invoke original function
      }
    
      return result
    }
    
    module.exports = Spy

*/