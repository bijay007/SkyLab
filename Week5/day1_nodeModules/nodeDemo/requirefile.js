// commonjs helps load(import) external files
var showName = require('./nodeDemo.js') // returns object as exports is an object
showName()

var PersonX = require('/nodeDemo.js').who // it's because 'who' is extended object that contains the constructer function
var bijay = new PersonX('bijay')
console.log(bijay.myName)

// if in nodeDemo file in line 10 we had 'module.exports = Person' then here in line 5..
// we can just write - require('path') as it imports Person
