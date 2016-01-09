var sum = function(...args){
  let sum = args.reduce( (sum, n) => sum + n );
  return sum;
};

console.log(sum(1,2,3)); // 6
