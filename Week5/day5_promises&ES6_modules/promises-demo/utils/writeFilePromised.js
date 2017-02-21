module.exports = function( contentToWrite ) {
  return new Promise( function(resolve, reject) {

    fs.writeFile('output.txt' , contentToWrite, (error) => {
      if (error) reject(error)
      resolve("File Saved!")
    })

  }) // => { then: function(fn) { ... fn(data) }   }
}