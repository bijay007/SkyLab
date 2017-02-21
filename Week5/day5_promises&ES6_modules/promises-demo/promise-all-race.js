var promise1 = new Promise( function(resolve, reject) {

  setTimeout( function() {
    resolve("data1")
  },3000)

})

var promise2 = new Promise( function(resolve, reject) {

  setTimeout( function() {
    resolve("data2")
  },10000)

})

var promise3 = new Promise( function(resolve, reject) {

  setTimeout( function() {
    resolve("data3")
  },6000)

})

// Promise.all([ promise1, promise2, promise3 ])
//   .then( console.log )
//   .catch( error => console.log("X => " + error) )

Promise.race([ promise1, promise2, promise3 ])
  .then( console.log )
  .catch( error => console.log("X => " + error) )



