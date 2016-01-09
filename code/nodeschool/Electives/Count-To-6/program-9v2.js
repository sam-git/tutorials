console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

console.log(process.argv[3])
console.error("SMA")

function html(pieces, ...subs) {
  var result = pieces[0];
  for (var i = 0; i < subs.length; i++) {
    subs[i] = subs[i].replace(/&/g, "&amp;")
    subs[i] = subs[i].replace(/</g, "&lt;")
    subs[i] = subs[i].replace(/>/g, "&gt;")
    subs[i] = subs[i].replace(/'/g, "&apos;")
    subs[i] = subs[i].replace(/"/g, "&quot;")

    result += subs[i] + pieces[i + 1]
  }
  // console.log(args)
  return result
}
