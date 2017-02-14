var util = require("util");
var EventEmitter = require("events").EventEmitter;

util.inherits(UserList, EventEmitter);

var users = [];

function UserList() {}

UserList.prototype.addUser = function(user) {
  users.push(user)
  this.emit("userAdded", user)
}

UserList.prototype.listAll = function() {
  return users;
}

module.exports = UserList