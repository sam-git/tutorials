var arg1 = process.argv[2];
var arg2 = process.argv[3];

import S from './program5-math';
console.log(S.PI);
console.log(S.sqrt(+arg1));
console.log(S.square(+arg2));

