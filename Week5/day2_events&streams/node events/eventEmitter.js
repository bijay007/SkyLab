var Eventemitter = require('events').Eventemitter // Eventemitter is a method of events module
// publish-subscribe/observer pattern
var util = require('util')

util.inherits(UserList, Eventemitter) // here UserList has access to all methods of Eventemitter

function UserList () {
  this.list = []
}

UserList.prototype.addUser = function (user) {
  this.list.push(user)
// addUser method emits an event called 'userAdded' whenever a new user is pushed in list
  this.emit('userAdded', user) // has access to emit of Eventemitter
}

var users = new UserList()
// new instances of UserList can listen to the event and log out stuffs
users.on('userAdded', function (data) {
  console.log('The following user was added: ' + data)
})

setTimeout(function () { users.addUser('juanma') }, 2000)
setTimeout(function () { users.addUser('alejandro') }, 5000)
