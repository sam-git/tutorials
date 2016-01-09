function getDependencies(tree) {
   // SOLUTION GOES HERE
   // Note: Feel free to add additional arguments
   // to this function for use with recursive calls.
   // Or not! There are many ways to recurse.
  //  console.log(tree)
  //  console.log(Objec t.keys(tree))
  // console.log(tree)
  if (!tree) {
    // console.log("NO TREE")
    return []
  }
  if (!tree.dependencies) {
    // console.log("NO DEPENDENCIES")
    return []
  }
  var dependencies = Object.keys(tree.dependencies).map(function(dependency) {
    return dependency + '@' + tree.dependencies[dependency].version
  })

  // console.log(dependencies)

  Object.keys(tree).forEach(function(key){
    // console.log(key);
    if (key=='dependencies') {
      // console.log(tree[key])
      Object.keys(tree.dependencies).forEach(function(dependency){
        // console.log("D", dependency)
        Array.prototype.push.apply(dependencies, getDependencies(tree.dependencies[dependency]))
      });
    }
  })

  return dependencies.sort().filter(function(str, index, array) {
    return !(str === array[index-1])
  });
  //  Object.keys(tree).forEach(function(key){
  //   //  console.log(key)
  //    if (key=='dependencies') {
  //     //  console.log(tree[key])
  //     getDependencies(tree[key])
  //    }
  //  })

  //  return ['here']

 }


 module.exports = getDependencies
