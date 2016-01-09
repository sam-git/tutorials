function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Your code here.

//console.log(ancestry);
function group(person) {
  return Math.ceil(person.died / 100);
}

centuryToAgeAtDeath = Object.create(null);

ancestry.forEach(function(person){
  var century = group(person);
  if (!(century in centuryToAgeAtDeath)) {
    centuryToAgeAtDeath[century] = [];
  }
  centuryToAgeAtDeath[century].push(person.died - person.born)
})

for (century in centuryToAgeAtDeath) {
  output = century + ": ";
  output += Math.round(average(centuryToAgeAtDeath[century]) * 10) / 10;

  console.log(output)
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
