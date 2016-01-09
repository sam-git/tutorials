function getShortMessages(messages) {
  return messages.filter(function(x){
  	return x.message.length < 50
  }).map(function(x){
  	return x['message']
  })
}

// function getShortMessages(messages) {
//   return messages.filter(function(x){
// 	  console.log(x.length < 50)
//   })
// }

module.exports = getShortMessages
