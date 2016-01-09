const max = process.argv[2];
let FizzBuzz = {
    [Symbol.iterator]() {
        // here belongs the FizzBuzz logic
        // Hint：
        // When its finished you have to return an object
        // with the property `done: true` but before you
        // have to set `done: false`
        let n = 0;
        return {
            next() {
                ++n;
                // The result of next has to be an object with the property `done` that states whether or not the iterator is done.
                if (n > max) {
                    return {
                        done: true,
                    }
                } else {
                    let value = n;
                    if (n % 15) {
                        value = "FizzBuzz"
                    } else if (n % 3 === 0) {
                        value = "Fizz"
                    } else if (n % 5 === 0) {
                        value = "Buzz"
                    } 
                    return {
                        value: value,
                        done: false,
                   }
                };
            }
        };
    }
}

for (var n of FizzBuzz) {
    console.log(n);

}
