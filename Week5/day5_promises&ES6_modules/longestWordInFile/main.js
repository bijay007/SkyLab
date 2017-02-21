var fs = require('fs')

var readFilePromised = function( fileToRead ) {
  return new Promise( function(resolve, reject) {

    fs.readFile(fileToRead , 'utf-8', (error, content) => {
      if (error) reject(error)
      resolve(content)
    })

  })
}

var writeFilePromised = function( contentToWrite ) {
  return new Promise( function(resolve, reject) {

    fs.writeFile('output.txt' , contentToWrite, (error) => {
      if (error) reject(error)
      resolve("File Saved!")
    })

  }) // => { then: function(fn) { ... fn(data) }   }
}


readFilePromised('test.txt') // Async
  .then( data => data.split(" ") ) // Sync
  .then( aWords => aWords.map( word => word.length) ) // Sync
  .then( aLengthWords => Math.max( ...aLengthWords ) ) // Sync
  .then( maxNumber => `Longest word has ${maxNumber} letters` ) // Sync
  .then( writeFilePromised ) // Async
  .then( console.log ) // Sync
