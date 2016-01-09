var args = process.argv[2].split(",");
args = args.map((arg)=> +arg);

var sum = function(...args){
  return args.reduce( (sum, n) => sum + n );
};

// write a function called `avg` here that calculates the average.
var avg = function(...args){
  return sum(...args)/args.length;
};

console.log(avg(...args));