console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(...args) {
  for (var i = 1; i < args.length; i++) {
    args[i] = args[i].replace(/&/g, "&amp;")
    args[i] = args[i].replace(/'/g, "&apos;")
    args[i] = args[i].replace(/""/g, "&quot;")
    args[i] = args[i].replace(/</g, "&lt;")
    args[i] = args[i].replace(/>/g, "&gt;")

  }
  // console.log(args)

  var str = args[0][0]
  for (var i = 1; i < args.length; i++ ) {
      str += args[i]
      str += args[0][i]
    // what goes here?
    // don't forget to return the escaped string!
  }
  return str
}
