function getDependencies(tree, depth, results) {
  depth = ++depth || 0
  results = results || []
  var dependencies = tree && tree.dependencies || []

  Object.keys(dependencies).forEach(function(dep) {
    var key = dep + '@' + dependencies[dep].version
    results.push(key)
    getDependencies(dependencies[dep], depth, results)
  })

  // remove dulpicates and sort at end.
  if (depth == 0) {
    return results.sort().filter(function(item, index, array) {
      return !(array[index] === array[index-1]);
    })
  }

  return results;

}

module.exports = getDependencies
