// make a standard js Object. keys and for .. in don't return anything
a = {}
console.log(Object.keys(a)); // []
for (var prop in a) {
  console.log(prop);
}
// no ouput

// make a standard js Object with one property. keys and for .. both return that property.
b = {a:1};
console.log(Object.keys(b)); // ['a']

for (var prop in b) {
  console.log(prop);
}
// a


// Object.keys does not look up the prototype chain, but for ... in does
c = Object.create(b)

console.log(Object.keys(c)); // []

for (var prop in c) {
  console.log(prop);
}
// a
