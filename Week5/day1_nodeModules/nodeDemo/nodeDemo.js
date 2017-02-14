// exports is an object so we can add properties to it
// Way 1
module.exports = function myName () {
  console.log('I am Bijay')
}
// Way 2
function Person (name) {
  this.myName = name
}
module.exports.who = Person // adding properties to exports later

// package json helps set and install dependecies, just like Bower in frontend
