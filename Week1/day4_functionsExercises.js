// FOUND AT : https://github.com/juanmaguitar/exercises-javascript/tree/master/07-exercises-functions

/* String Calculator

Define a function called add with a single argument input. The input to the function will be a string containing a comma-separated list of numbers.
The function must return the sum of the numbers. e.g.

add(1,2,3,4) // => 10 */

(function add (str) {
  var sum = 0, ele, numArr = str.split(',')
  for (ele of numArr) {
    sum += parseInt(ele, 10)
  }
  return sum
}('1,2,3,4,5'))

/* Is palindrome?

Write a JavaScript function that checks whether a passed string is palindrome or not.
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g. 'madam' or 'nurses run' */

function checkPalindrome (str) {
  str = str.replace(/ /g, '')
  var len = str.length - 1
  for (var i = 0; i < len; i++) {
    if (str[i] !== str[len]) {
      return 'Not palindrome'
    } else {
      len--
    }
  }
  return 'It\'s palindrome'
}
checkPalindrome('nurses run')

/* String combinations

Write a JavaScript function that generates all combinations of a string

Example string : 'dog'
Expected Output : d,do,dog,o,og,g  */

/* (function strCombo (str) {
  for (var i = 0; i < str.length; i++) {
    var combo = Array.prototype.map.call(str, function (ele) {  // here I use the array method called 'map' method on the 'str' string by calling it from Array.prototype
      return [ele, ele + str[i + 1]]
    })
  }
  return combo
}('buenas')) */

function combiner (str) {
  var mainArr = []
  for (var i = 0; i < str.length; i++) {
    runThru(i)
  }
  function runThru (limit) {
    var oldString, newString = ''
    for (var i = limit; i < str.length; i++) {
      oldString = str[i]
      newString = newString + oldString
      mainArr.push(newString)
    }
  }
  return mainArr
}
combiner('doggy')

/* Sort letters

Write a JavaScript function that returns a passed string with letters in alphabetical order

Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string. */

(function sorter (str) {
  return Array.prototype.sort.call(str.split('')).join('') // calling Array sort method on splitted string and joining it later
}('zaybxcwd'))
