var UserList = require('./UserList')

var users = new UserList()

require('./log.js')(users)

setTimeout( function(){ users.addUser("juanma") }, 2000)
setTimeout( function(){ users.addUser("alejandro") }, 3000)
setTimeout( function(){ users.addUser("david") }, 5000)