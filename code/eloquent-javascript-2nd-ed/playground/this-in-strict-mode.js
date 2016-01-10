(function(){
  console.log(this);  //logs everything
})();


(function(){
  "use strict";
  console.log('strict');
  console.log(this);  // undefined
})();
