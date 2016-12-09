alert("1. Este juego te pide que averigues una palabra.\n2. Tienes que entrar las letras de la palabra - 1 por 1.\n3. Si entras alguna letra que no exista en la palabra, te muestra los intentos extras que te quedan.\n4. Si no aciertas en 10 intentos, tu pierdes y el juego se acaba.\n5. Si aciertas en menos de 10 intentos ==> GENIAL!!");
alert("CONSEJO : Es un nombre de una fruta tropical.")

var myWord = "platano";
var newWord = [];

function userInput(){
	var user = prompt("Entra UNA letra de la palabra que estoy pensando : ");
	return user;
}

(function compare(){
	var joinedLetters;
	for (var i=10; i>0; i--) {
    	var letter = userInput();
		var posicion = myWord.indexOf(letter);
		if (posicion != -1 && newWord[posicion]!=letter) {
			newWord[posicion] = letter;
			joinedLetters = newWord.join("");
			if(joinedLetters===myWord) {
				alert("Genial detective. Has averiguado en solo "+(11-i)+" intentos.");
				break;
			}
		} else if (posicion!=-1 && newWord[posicion]=letter){

			alert("Cuidado!! '"+letter+"' no existe en la palabra. Te quedan "+(i-1)+" intentos");
		} else {
				alert ("Ya no te quedan vidas.\nLa palabra era "+myWord+".\nInténtalo luego :D");
		}
	};
})();

function findSameLetters(passedLetter) {
	var letterList = myWord.split("");
	var positions = [];
	for (var i=0; i<myWord.length; i++) {
		if (indexOf[letter])
	}
}
