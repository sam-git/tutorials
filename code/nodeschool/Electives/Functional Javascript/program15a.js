function loadUsers(userIds, load, done) {
    var users = []
    var completed = 0;
    // for (var i = 0; i < userIds.length; i++) {
    //   users.push(load(userIds[i]))
    // }
    // return users

    userIds.forEach(function(id, index) {
        load(id, function(user) {
            users[index] = user
            if (++completed == userIds.length) {
                // done(users)
                console.log('bel')
            }
        })
    })

}

module.exports = loadUsers
