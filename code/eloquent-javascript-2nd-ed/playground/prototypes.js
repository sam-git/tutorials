// Experiment to understand prototypes better.

// create object a to use as a prototype
var a = {}
a.x = '1'

// create object b using a as the prototype
var b = Object.create(a);

console.log('x' in b); // true
console.log(b.hasOwnProperty('x')); // false
console.log(a.hasOwnProperty('x')); // true

// log b. It has no x property when logged.
console.log(b);
// > {}
// log the x property on b which is found in the prototype.
console.log(b.x);
// > 1

console.log(a);
// > {x:1}
console.log(a.x);
// > 1

// set the property x on b/
/*
  This is the tricky bit. Instead of looking for x up he prototype chain,
  Javascript only looks for x on b itself. Since it is not found it creates
  the b property on x which now shadows (overrides?) the x property on a.

  Not a.x and b.x refer to different values.
*/
b.x = 12;
console.log(b.x);
// > 12
console.log(a.x);
// > 1

var c = Object.create(b);
console.log(c.x);
// > 12
c.x = 100;
console.log(c.x);
// > 100
console.log(b.x);
// > 12
