function foo() {
  quux = 14;

  function zip() {
    var quux = 12;
    bar = true;
  }
  var bar;
  return zip;
}
