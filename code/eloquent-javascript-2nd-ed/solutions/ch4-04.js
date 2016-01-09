// Your code here.
function deepEqual(a, b) {
  // equal primitves or same object
  if (a === b) {
    return true;
  }

  // if either is null here they can't be euqal
  if (a === null || b === null) {
    return false
  }

  // if either type is not an object here they can't be equal
  if (typeof a != 'object' || typeof b != 'object') return false;

  // count properties.
  // potential danger counting properties on a different to be
  var aCount = Object.keys(a).length;

  var bCount = 0;
  for (var prop in b) {
    bCount += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop])) {
      return false;
    }
  }

  return aCount === bCount;

}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
