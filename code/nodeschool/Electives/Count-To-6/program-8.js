// module.exports = (x, clams=x.length) => x + Array(clams+1).join('!')
module.exports = (x, clams=x.length) => x + '!'.repeat(clams);
