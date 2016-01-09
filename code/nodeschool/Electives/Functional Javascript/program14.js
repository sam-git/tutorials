//using program 13 solution works

// function repeat(operation, num) {
//   // Modify this so it doesn't cause a stack overflow!
//   if (num <= 0) return
//   operation()
//       setTimeout(function(){
//             return repeat(operation, --num)
//       })
//
// }
//
// function trampoline(fn) {
//   // You probably want to implement a trampoline!
// }
//
// module.exports = function(operation, num) {
//   // You probably want to call your trampoline here!
//   return repeat(operation, num)
// }

//explanbation of occicial answer
//https://stackoverflow.com/questions/25228871/how-to-understand-trampoline-in-javascript

function repeat(operation, num) {
    return function() {
        if (num <= 0) return
        operation()
        return repeat(operation, --num)
    }
}

function trampoline(fn) {
    console.log(typeof fn)  
    while(typeof fn === 'function') {
        fn = fn()
    }
    console.log(typeof fn)
}

module.exports = function(operation, num) {
    trampoline(function() {
        return repeat(operation, num)
    })
}
