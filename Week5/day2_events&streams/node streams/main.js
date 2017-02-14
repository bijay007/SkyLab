var fs = require('fs')
var counter = 0;

var readStream = fs.createReadStream('lorem.txt', 'utf-8')

readStream.on('data', function( chunk ) {
  console.log( chunk.split(" ").length )
  console.log( counter++ )
})

readStream.on('end', function( chunk ) {
  console.log("data finished")
})