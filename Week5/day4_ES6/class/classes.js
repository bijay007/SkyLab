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

var me = new Person("juanma", "barcelona")

//me.sum(4,5)
Person.sum(4,5)

