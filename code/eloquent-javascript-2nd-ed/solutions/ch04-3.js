// Your code here.
function arrayToList(array) {
  //recursive
  if (!array.length) return null;
  return {value:array.shift(), rest:arrayToList(array)}
}

function arrayToList(array){
  //iteratve
  var rest = null;
  while(array.length){
    rest = {value: array.pop(), rest: rest}
  }
  return rest;
}

function listToArray(list) {
  //iterative
  var array = [];
  while(list) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}

function listToArray(list) {
  // iterative with for loop
  var array = [];
  for (var node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function listToArray(list, array) {
  //recursive
  array = array || [];
  if (!list) return array;
  array.push(list.value);
  return listToArray(list.rest, array);
}

function prepend(value, list) {
  return {value:value, rest:list};
}

function nth(list, index) {
  // iterative
  if (index >= list.length) return undefined;
  for(var i = 0; i < index; i++) {
    list = list.rest;
  }
  return list.value;
}

function nth(list, index) {
  // recursive
  if (!list) return undefined;
  if (index == 0) return list.value;
  return nth(list.rest, index - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(listToArray(arrayToList([])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
