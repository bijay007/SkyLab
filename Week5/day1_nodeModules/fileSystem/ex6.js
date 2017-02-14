/* Write a node program that process local txt and return values as a Array.

Hint: You need npm module -> concat-stream */

// var concat = require('concat-stream')
// var fs = require('fs')
// var emptyArr = []

// var read = fs.createReadStream('exercise.txt', 'utf-8')
// var writeBuffer = concat(function (data) {
//   emptyArr.push(writeBuffer.write(data))
// })
// // when reading text file!!
// read.on('data', function (chunk) {
//   read.pipe(writeBuffer) // pass the chunk to concat ??
// })
// // when reading is done!!
// read.on('end', function (chunk) {
//   console.log(emptyArr)
// })

var fs = require('fs')
var concat = require('concat-stream')

var streamFileRead = fs.createReadStream('test.txt', 'utf-8')

var addAndManageChunksData = concat(function (totalText) {
  console.log('There are ' + totalText.split(' ').length + ' words in the file')
}) // returns a writable stream

streamFileRead
  .pipe(addAndManageChunksData)
