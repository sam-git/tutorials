module.exports = function average(...args) {
        var total = args.reduce((prev, current) => prev + current);
        return total / args.length;
    };
