function reduce(arr, fn, initial) {
    return (function ahoy(index, reducto) {
        if (index >= arr.length) return reducto;
        
        reducto = fn(reducto, arr[index], index, arr);
        
        return ahoy(index+1, reducto)
        
    })(0, initial)
}

module.exports = reduce