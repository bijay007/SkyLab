/* Write a node program that read a file (passed as parameter) in local machine and shows in the console the content of it.
eg. node app.js test.txt
Hint: You need npm module - fs */

var file = require('fs')
// var enterName = process.argv[2]
// file.readFile(enterName',...
file.readFile('exercise.txt', 'utf-8', function (error, data) {
  if (error) throw error  // code stops here when error found
    // if (!error) console.log(data)
  console.log(data)
})
console.log('Reading file...')
