function repeat(operation, num) {
  // modify this so it can be interrupted
  function yah () {
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
  }
  setImmediate(yah);
}

module.exports = repeat
