var fs = require('fs')

var writeStream = fs.createWriteStream('output.txt')

writeStream.write('Lorem ipsum dolor sit amet.', 'utf-8')
writeStream.write('Lorem ipsum dolor sit amet.', 'utf-8')
writeStream.write('Lorem ipsum dolor sit amet.', 'utf-8')
writeStream.write('Lorem ipsum dolor sit amet.', 'utf-8')
writeStream.write('Lorem ipsum dolor sit amet.', 'utf-8')
writeStream.write('Lorem ipsum dolor sit amet.', 'utf-8')
writeStream.write('Lorem ipsum dolor sit amet.', 'utf-8')

writeStream.end()

writeStream.on('finish', function() {
    console.log("Write completed.");
});