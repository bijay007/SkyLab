/* function encoder(userWord) { */
function encoder(){
	var userWord = document.getElementById("userinputbox").value;
	var letterArray = userWord.split("");		// splitting the user entered word in an array of letters
	var encodedWord = [];
	for (var i=0; i<letterArray.length/2; i++) {		// pushing elements sequentially from first and second half of original array
		encodedWord.push(letterArray[i],letterArray[userWord.length/2 + i]);
	}
	displayResult.value = encodedWord.join("");
}
/* var userWord = document.getElementById("userinputbox").value; */
//This won't work cuz function is hoisted at the top of the scope and 'userWord' is undefined inside the function.
// The solution is by putting line 11 inside the function so the function can use its value defined on RHS
function decoder() {
	var encodedWord = displayResult.value;	// extracting the encoded text from display box
	var letterArray = encodedWord.split("");
	var half1 = [], half2 = [];			// array for storing even and odd index elements from letterArray
	var decodedWord;
	for (var i=0; i<letterArray.length; i+=2) {
		half1.push(letterArray[i]);
		half2.push(letterArray[i+1]);
	}
	decodedWord = half1.concat(half2);
	displayResult.value = decodedWord.join("");	// overwriting the displaybox with new string
}
var displayResult = document.getElementById('displaybox');	// box to show results
var encodeBtn = document.getElementById('encode');	// event listener 'Encode' button
encodeBtn.addEventListener("click", encoder);
var decodeBtn = document.getElementById('decode');	// event listener 'Decode' button
decodeBtn.addEventListener("click", decoder);