/*encodeWord

Define a function called ​encodeWord​ that receives a string and return the codified version of that string replacing the following characters:

7 instead of T
4 instead of A
5 instead of S
0 instead of O */

(function encodeWord (str) {
	str = str.replace(/t/ig, 7).replace(/a/ig, 4).replace(/s/ig, 5).replace(/o/ig, 0)	
	return str
}('You can put anything here and the function will do things said in the comments above TOAST !!'))

/*encodeWordPlus

Improve the previous function to add a random number between 0 and 1000 every 7 characters */

(function encodeWord (str) {
	str = str.replace(/t/ig, 7).replace(/a/ig, 4).replace(/s/ig, 5).replace(/o/ig, 0)
	function randomNum () {
		var rNum = Math.floor(Math.random() * 1000) + 1
		return rNum
	}
	var newStr = ''
	for (var pos6 = 5; pos6 < str.length; pos6 += 5) {
		newStr = str.slice(pos6,0)+ randomNum + str.slice(pos6)
	}
	return newStr
}('You can put anything here and the function will do things said in the comments above. !!! TOAST !!'))