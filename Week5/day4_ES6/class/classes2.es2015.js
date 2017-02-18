class Person {

  constructor(name, location) {
    this.name = name
    this.location = location
  }

  talk() {
    return "I'm " + this.name ;
  }

  shout() {
    return ("I'm " + this.name).toUpperCase();
  }

}

class Student extends Person {

  constructor(name, location) {
    super(name, location)
  }

  study() {
    return "I'm " + this.name + " and i'm studying...";
  }

}

class Teacher extends Person {

  constructor(name, location, titles) {
    super(name, location)
    this.titles
  }

  teach() {
    return "I'm " + this.name + " and i'm teaching...";
  }

}

var julian = new Student("julian", "madrid")

julian.talk()
julian.shout()
julian.study()


