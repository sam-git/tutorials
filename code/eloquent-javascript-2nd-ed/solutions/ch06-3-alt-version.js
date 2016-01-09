// Your code here.

function ArraySeq(array) {
  this.array = array;
}
ArraySeq.prototype.tail = function() {
  if (this.array.length > 1) {
    return new ArraySeq(this.array.slice(1));
  } else {
    return null;
  }
}
ArraySeq.prototype.head = function() {
  return this.array[0];
}

function logFive(seqObject) {
  for (var i = 0; i < 5 && seqObject != null; i++) {
    console.log(seqObject.head())
	seqObject = seqObject.tail()
  }
}

function RangeSeq(start, end) {
  this.current = start;
  this.end = end;
}
RangeSeq.prototype.head = function() {
    return this.current;
}
RangeSeq.prototype.tail = function() {
  if (this.current < this.end) {
    return new RangeSeq(this.current + 1, this.end)
  } else {
    return null;
  }
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
