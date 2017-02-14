/* Write a node.JS program that list the content of the current directory indicating if is a directory or a file

$ node ex4.js
FILE:ex1.js
FILE:ex2.js
FILE:ex3.js
FILE:ex4.js
FILE:getLinksNode.js
FILE:link.txt
DIR :node_modules
FILE:recursiveContentsDir.js
FILE:results.txt
FILE:test.txt
Hint: You need fs.readdirSync, fs.lstatSync and isDirectory() */

var fs = require('fs')

var listFiles = fs.readdirSync(__dirname) // where we are at. process.pwd -> where code is being executed
listFiles.forEach(function (item) {
  var stats = fs.lstatSync(item)
  if (stats.isFile()) {
    console.log('File: ' + item)
  } else if (stats.isDirectory()) {
    console.log('Directory: ' + item)
  } else {
    console.log('??? : ' + item)
  }
})
