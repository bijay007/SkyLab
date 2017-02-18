var myName = "juanma"
var myLocation = "barcelona"

const sayHi = name => `Hello ${name}!!`

var me = {
  myName,
  myFunction() {
    return "something"
  },
  myLocation,
  sayHi,
  [`topic-${name}`] : 45
}

// var sayHi = function(name) { return "Hello" + name + "!" }

// function sayHi(name) {
//   return "Hello" + name + "!"
// }



// var me = {
//   name: name,
//   location: location
//   sayHi: sayHi
// }

var me = {
  name,
  location,
  sayHi,
  [`topic-${name}`] : 45
}

me["topic" + index] = "aaaa"

me.sayHi('juanma') // Hello juanma!






function (idArtist)  {

  const url = `http://api.spotify.com/artists/${idArtist}`

  $.ajax({ url })
    .then( (data) => console.log(data))


}


var messages = {
  get latest () {
    if (this.log.length == 0) return undefined;
    return this.log[this.log.length - 1]
  },
  set current (str) {
    this.log[this.log.length] = str;
  },
  get current () {
    return "current value is = " + this.latest
  },
  get total () {
    return this.log.length
  },
  log: []
}

messages.current = "hi!"
messages.current = "bye!"
console.log ( messages.latest )  // "bye!"
messages.current = "chau!"
console.log ( messages.latest ) // "chau!"



















