alert("JUEGO DE LLENAR LOS ESPACIOS");
alert("1. Este juego te pide que averigues una palabra.\n2. Tienes que entrar las letras de la palabra - 1 por 1.\n3. Si entras alguna letra que no exista en la palabra, te muestra los intentos extras que te quedan.\n4. Si no aciertas en 10 intentos, tu pierdes y el juego se acaba.\n5. Si aciertas en menos de 10 intentos ==> GENIAL!!");
alert("CONSEJO : Es un nombre de una fruta.\n                            _ a _ _ a n _")

var myWord = "manzana";

function userInput(){  // asking letter from user
	var user = prompt("Entra UNA letra de la palabra que estoy pensando : ");
	return user;
}

(function compare(){    // main function 
	var nextIndex, newWord=[], counter;
	for (var i=10; i>0; i--) {

		if (newWord.join("")===myWord){    // when user has already solved in <10 tries (to not ask again for letter)
			alert("Genial detective. Has averiguado en solo "+(11-i)+" intentos.");
			break;
		}
		
    	var letter = userInput();
		var posicion = myWord.indexOf(letter);

		if (posicion != -1 && newWord[posicion] != letter && letter!="") {  // if letter found and doesn't already exits, append it to array
			newWord[posicion] = letter;

		} else if (posicion!=-1 && newWord[posicion]===letter) {  // if the letter found but is already there (duplicates)
				nextIndex = findSameLetters(letter);
				counter = 0;
				if (nextIndex.length>1) {
					while (newWord[nextIndex[counter]] === letter || newWord[nextIndex[counter]]!=undefined) {
						counter++;
					}
					newWord[nextIndex[counter]] = letter;
				} else {
					alert("La palabra solo tiene una letra '" + letter + "'. Lo la introduzcas más :D");
				}

		} else if (posicion ==-1 && i>1) {  // if letter doesn't exist but the user has more chances to try
			alert("Cuidado!! '"+letter+"' no existe en la palabra. Te quedan "+(i-1)+" intentos");

		} else {   // when user failed in 10 tries
				alert ("Ya no te quedan vidas.\nLa palabra era "+myWord+".\nInténtalo luego :D");
		}
	};
}());

function findSameLetters(passedLetter) {  // returns all index position of multiple occurence of any given letter in an array
	var allIndexPositions = [];
	for (var i=0; i<myWord.length; i++) {
		if (myWord[i]===passedLetter) {
			allIndexPositions.push(i);
		}
	}
return allIndexPositions;
}
