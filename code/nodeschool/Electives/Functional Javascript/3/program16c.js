function getDependencies(tree) {
  // tidied up version of b
  if (!tree || !tree.dependencies) {
    return []
  }
  var dependencies = Object.keys(tree.dependencies).map(function(dependency) {
    return dependency + '@' + tree.dependencies[dependency].version
  })
  Object.keys(tree.dependencies).forEach(function(dependency) {
    Array.prototype.push.apply(dependencies, getDependencies(tree.dependencies[dependency]))
  });
  return dependencies.sort().filter(function(str, index, array) {
    return !(str === array[index - 1])
  });
}
module.exports = getDependencies

function getDependencies(tree, results) {
  // typing out of official answer.
  results = results || []

  var dependencies = tree && tree.dependencies || []

  Object.keys(dependencies).forEach(function(dep) {
    var key = dep + '@' + tree.dependencies[dep].version
    if (results.indexOf(key) === -1) results.push(key)
    getDependencies(tree.dependencies[dep], results)
  })
  return results.sort()
}
module.exports = getDependencies
