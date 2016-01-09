specialForms["set"] = function(args, env) {
  // Your code here.
  var localEnv = env;
//  console.log(args)
  while(env !== null) {
//    console.log(env)
    if (Object.hasOwnProperty.call(env, args[0].name)) break;
    env = Object.getPrototypeOf(env);
  }
  if (env == null) throw new ReferenceError();
  env[args[0].name] = evaluate(args[1], localEnv);

  //should return the new value
};

run("do(define(x, 4),",
    "   define(setx, fun(val, set(x, val))),",
    "   setx(50),",
    "   print(x))");
// → 50
run("set(quux, true)");
// → Some kind of ReferenceError
