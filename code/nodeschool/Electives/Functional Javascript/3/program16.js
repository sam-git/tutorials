function getDependencies(tree) {
  // SOLUTION GOES HERE
  // Note: Feel free to add additional arguments
  // to this function for use with recursive calls.
  // Or not! There are many ways to recurse.

  list = [];

  if (!tree) {
    return list;
  }

  // console.log(tree);
  // console.log(typeof(tree));
  console.log(Object.keys(tree))
  if (!tree.dependencies) {
    return;
  }
  console.log(Object.keys(tree.dependencies))
  // console.log(tree.version)

  function recurse (tree) {
    list.push(tree.version);
    if (!tree.dependencies) {
      return;
    }
    Object.keys(tree.dependencies).forEach(function(subtree) {
      console.log('HERE!!!');
      recurse(subtree);
    });
  }

  console.log(list);
  return list;


}



module.exports = getDependencies
