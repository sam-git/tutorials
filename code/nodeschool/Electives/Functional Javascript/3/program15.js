function loadUsers(userIds, load, done) {

  //boiler plate
  // var users = []
  // for (var i = 0; i < userIds.length; i++) {
  //   users.push(load(userIds[i]))
  // }

  //first solution
  // users = userIds.map(function(id) {
  //   return load(id)
  // })
  // done(users)

  //SECOND solution
  users = []
  completed = 0
  userIds.forEach(function(id, index) {
    users[index] = load(id)
    if (++completed === userIds.length) {
      done(users)
    }
  })

}

module.exports = loadUsers
