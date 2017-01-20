/* Uppercase First Letter

Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox ' */

function upperCase (str) {
  var splitter = str.split(' ')
  var strArr = map (function (ele) {
    return splitter[ele][0].toUpperCase()
  })
}