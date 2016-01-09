// Your code here.

function ArraySeq(array) {
  this.array = array;
}
ArraySeq.prototype.next = function() {
  return this.array.shift();
}
ArraySeq.prototype.hasNext = function() {
  return this.array.length > 0;
}

function logFive(seqObject) {
  for (var i = 0; i < 5; i++) {
    if (!seqObject.hasNext())
      break;
    console.log(seqObject.next());
  }
}

function RangeSeq(start, end) {
  this.current = start;
  this.end = end;
}
RangeSeq.prototype.next = function() {
    return this.current++;
}
RangeSeq.prototype.hasNext = function() {
  return this.current <= this.end
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
