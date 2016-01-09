const max = process.argv[2];
let FizzBuzz = function*(){
    let n = 1;
    // The result of next has to be an object with the property `done` that states whether or not the iterator is done.
    while (n <= max) {
        let value = n;
        if (n % 15 == 0) {
            value = "FizzBuzz"
        } else if (n % 3 === 0) {
            value = "Fizz"
        } else if (n % 5 === 0) {
            value = "Buzz"
        } 
        yield value;
        ++n;
    }
}();

for (var n of FizzBuzz) {
    console.log(n);

}
