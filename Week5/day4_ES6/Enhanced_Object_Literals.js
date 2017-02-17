var myName = "juanma"
var myLocation = "barcelona"

const sayHi = name => `Hello ${name}!!`

var me = {
  myName,
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
