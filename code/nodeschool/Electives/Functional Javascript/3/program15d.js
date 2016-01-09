function loadUsers(userIds, load, done) {
  // var users = [];
  // for (var i = 0; i < userIds.length; i++) {
  //   users.push(load(userIds[i]));
  // }
  // return users;

  var users = [];
  var count = 0;
  userIds.forEach(function(id, index){
    load(id, function(loadedUser){
      users[index] = loadedUser;
      if (++count >= userIds.length()) {
        return done(users);
      }
    });
  });

}

module.exports = loadUsers;
