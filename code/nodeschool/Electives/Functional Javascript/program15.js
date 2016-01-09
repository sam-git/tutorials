
//works but probably shouldn't since it is not using the callback of load
function loadUsers(userIds, load, done) {
  // var users = []
  // for (var i = 0; i < userIds.length; i++) {
  //   users.push(load(userIds[i]))
  // }
  // return users

  loadedUsers = []
  userIds.map(function(id, index, array){
      loadedUsers[id] = load(id)
  })
  done(loadedUsers)
}

module.exports = loadUsers