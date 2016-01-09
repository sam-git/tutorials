var inputs = process.argv.slice(2);
    var result = inputs.map((i)=>i[0])
                       .reduce((prev, curr)=>prev.concat(curr));
    console.log(result);
