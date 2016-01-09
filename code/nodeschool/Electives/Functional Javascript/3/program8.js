function duckCount() {
  var args = Array.prototype.slice.call(arguments);
  var count = 0;
  args.map(function(item){
    if (Object.prototype.hasOwnProperty.call(item, 'quack')) {
      count++;
    }
  })
  return count;
}


function duckCount() {
  var args = Array.prototype.slice.call(arguments);
  return args.filter(function(item){
    return Object.prototype.hasOwnProperty.call(item, 'quack')
  }).length
}

module.exports = duckCount
