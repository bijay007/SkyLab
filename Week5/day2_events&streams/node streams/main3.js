var fs = require('fs')

fs.createReadStream('lorem.txt')

  .pipe( fs.createWriteStream('output.txt') )

writeStream.on("finish", function() {
  console.log("Write Completed!!")
})
