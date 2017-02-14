/* Write a node.JS program that creates a txt file with the text passed as a parameter

$ node ex5.js "hey ho! let's go"
The file was saved!
$ cat myText.txt
hey ho! let's go
Hint: You need fs.writeFile

Extra:
Improve the previous exercise to user the first parameter as the name of the destination file

More Extra:

Improve the previous exercise to also read and shows in the console the content of the file

$ node ex5.js nodeCLI.txt "it's a long way to the top..."
The file was saved!
it's a long way to the top...

$ cat nodeCLI.txt
it's a long way to the top... */

var fs = require('fs')
var fileName = process.argv[2]
var text = process.argv[3]

fs.writeFile(fileName, text, 'utf-8', createWriteFile) // passing function as dependency(??)

var createWriteFile = function(error){
  if (error) throw error
  console.log('File saved!')
  fs.readFile(fileName, 'utf-8', (err, data) => { // anonymous function as arrow function
    if (err) throw err
    console.log(data)
  })
