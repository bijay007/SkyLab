module.exports = function( fileToRead ) {
  return new Promise( function(resolve, reject) {

    fs.readFile(fileToRead , 'utf-8', (error, content) => {
      if (error) reject(error)
      resolve(content)
    })

  })
}