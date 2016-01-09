function loadUsers(userIds, load, done) {
  var users = [];
  var loadedCount = 0;
  userIds.forEach(function(id, index) {
    load(id, function(user, index) {
      users[index] = user;
      loadedCount++;
      if (loadedCount === userIds.length) {
        return done(users);
      }
    });
  });
}

module.exports = loadUsers;
