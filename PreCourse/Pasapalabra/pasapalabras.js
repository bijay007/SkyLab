"use strict";
var allLetters = [{
			id : 0,
			desc : "La gente se sienta sobre él",
			word : "silla"
			}, 

			{
			id : 1,
			desc : "Es una ciudad de españa.",
			word : "barcelona"	
			},

			{
			id : 2,	
			desc : "Es un vehiculo.",
			word : "coche"	
			}
];
function askUser() {
	var userWord = prompt("Adivina la palabra : ");
	return userWord;
}
function checker() {
	var playMore = confirm("Jugar ?");
	if (playMore){
		compare();
	}
}	
function compare() {
	var totalPoints = 0;
	allLetters.forEach(function(elements) {
		alert("Consejo : " + elements.desc);
		var userWord = askUser();
		if (userWord === elements.word) {
			totalPoints++;
			alert("Genial. Tienes " + totalPoints + " puntos.");
		} else {
			alert("La palabra era " + elements.word);
		}
	});
	alert("Enhorabuena!! Has completado el desafio con " + totalPoints + " puntos.");
	checker();
}
checker();
