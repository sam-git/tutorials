function duckCount() {
  // SOLUTION GOES HERE
    var count = 0;
    console.log(arguments.length)
    var args = Array.prototype.slice.call(arguments);
    console.log(args)
    args.map(function(x){
        if (Object.hasOwnProperty.call(x, 'quack')){
            count++;
        }
    }, 0)   
    return count;
}

module.exports = duckCount


function duckCount() {
  // SOLUTION GOES HERE

    return Array.prototype.slice.call(arguments).filter(function(obj){
        return Object.hasOwnProperty.call(obj, 'quack')
    }).length
}

module.exports = duckCount