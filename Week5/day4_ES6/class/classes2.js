var fs = require('utils')

function Person(name, location) {
  this.name = name
  this.location = location
}

Person.sum = function(a,b) {
  return a+b;
}

Person.prototype.talk() {
  return "I'm " + this.name;
}

Person.prototype.shout() {
  return ("I'm " + this.name).toUpperCase();
}

function Student(name, location) {}

Student.prototype.study() {
  return "I'm studying..."
}

utils.inherit(Student, Person)

var julian = new Student("julian", "madrid")

julian.talk()
julian.shout()
julian.study()


