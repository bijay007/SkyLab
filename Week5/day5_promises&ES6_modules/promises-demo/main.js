var fs = require('fs')

// var readFilePromised = require('./readFilePromised')
// var writeFilePromised = require('./writeFilePromised')

var readFilePromised  = require('fs-readfile-promise')
var writeFilePromised  = require('fs-writefile-promise')

readFilePromised('./data/test.txt') // Async
  .then( buffer => buffer.toString() ) // Sync
  .then( data => data.split(" ") ) // Sync
  .then( aWords => aWords.map( word => word.length) ) // Sync
  .then( aLengthWords => Math.max( ...aLengthWords ) ) // Sync
  .then( maxNumber => `Longest word has ${maxNumber} letters` ) // Sync
  .then( dataToWrite => writeFilePromised('./data/output.txt', dataToWrite) ) // Async
  .then( console.log ) // Sync
  .catch( error => {
    console.log("there was an error...")
    console.log(error)
  })
