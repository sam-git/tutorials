module.exports = function(namespace) {
  // SOLUTION GOES HERE
    var doesnt_matter_what_this_is = (null, {}, [], this, undefined)
    return console.log.bind(doesnt_matter_what_this_is, namespace)
}
