var myWord = prompt("Enter your name : ");
var newWord = [];
function userInput(){
	var user = prompt("Guess a letter : ");
	return user;
}
(function compare(){
  for (var i=0; i<myWord.length; i++) {
    var letter = userInput();
		var posicion = myWord.search(letter);
  	posicion != -1? newWord[posicion] = letter : alert("Wrong letter. Be careful!!");
	};
	var printOut = newWord.join("");
	printOut===myWord? alert("Congrats " + printOut + "!! You are the best!!") : alert("You dead mate!! It was " + myWord);
})();