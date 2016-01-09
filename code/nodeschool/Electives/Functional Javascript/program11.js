module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function(newArr, currentValue, index, array){
        return newArr.concat(fn(currentValue))
    }, [])
}

//official solution
/*
    module.exports = function map(arr, fn, thisArg) {
      return arr.reduce(function(acc, item, index, arr) {
        return acc.concat(fn.call(thisArg, item, index, arr))
      }, [])
    }

*/

