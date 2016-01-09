
//copied answer from https://github.com/timoxley/functional-javascript-workshop/issues/103
function repeat(operation, num) {
  // modify this so it can be interrupted
  if (num <= 0) return
      
  operation()

   setTimeout(function(){
        return repeat(operation, --num) 
   })

}

module.exports = repeat
