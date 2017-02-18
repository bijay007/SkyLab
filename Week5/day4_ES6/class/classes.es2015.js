class Person {

  constructor(name, location) {
    this.name = name
    this.location = location
  }

  static shotEvenMore() {
    return "HEY!!!" + this.prototype.shout.call({ name: "julian" })
  }

  static logSchool() {
    return this.school
  }

  static sum(a,b) {
    return a+b
  }

  talk() {
    return "I'm " + this.name + " and i'm in " + Person.school;
  }

  shout() {
    return ("I'm " + this.name).toUpperCase();
  }

}

Person.school = "skylab";

var me = new Person("juanma", "barcelona")

Person.sum(4,5)
console.log( Person.school ) // skylab
console.log( me.name ) // juanma
console.log( me.school ) // undefined

var Person = {
  sum: (a,b) => a+b,
  school: "skylab"
}

