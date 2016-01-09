var evenOrOdd = +process.argv[2];
// var evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
// var sum = +process.argv[3] + evenOrOdd;
// var obj = {};
// obj[evenOrOddKey] = evenOrOdd;
// obj[sum] = sum;


console.log({
	[evenOrOdd % 2 === 0 ? "even" : "odd"]: +process.argv[2],
	[+process.argv[3] + evenOrOdd]: +process.argv[3] + evenOrOdd
});
