"use strict"
var userConfirm = document.getElementById("submit");
var userInput = document.getElementById("word");
var userDesc = document.getElementById("descrip");
var userTrue = document.getElementById("correct");
var userFalse = document.getElementById("wrong");
var userTotal = document.getElementById("showPoints");
var userStart = document.getElementById("start");
var userRestart = document.getElementById("reset");

var allLetters =[{id: "a",desc: "La gente se sienta sobre la",word: "silla"}, 
                {id: "b",desc: "Es una ciudad de españa",word: "barcelona"},
                {id: "c",desc: "Despues de tarde, es..",word: "noche"},
                {id: "d",desc: "Se compra cosas con el..",word: "dinero"},
                {id: "e",desc: "El mejor jugador del mundo",word: "messi"},
                {id: "f",desc: "Huele a..",word: "fragnancia"},
                {id: "g",desc: "Es un tipo de aceite",word: "girasol"},
                {id: "h",desc: "Es un metal",word: "hierro"},
                {id: "i",desc: "Las avejas lo producen",word: "miel"},
                {id: "j",desc: "Formato popular para imagenes",word: "jpg"},
                {id: "k",desc: "Es un tipo de alcol",word: "vodka"},
                {id: "l",desc: "Es el rey de la jungla",word: "leon"},
                {id: "m",desc: "Para aprender JS, es necesario",word: "motivacion"},
                {id: "n",desc: "Ya viene el festival de..",word: "navidad"},
                {id: "o",desc: "Es una fruta tropical",word: "mango"},
                {id: "p",desc: "Tengo que atraparlos",word: "pokemon"},
                {id: "q",desc: "Primera letra del teclado",word: "q"},
                {id: "r",desc: "Fuente de luz",word: "lampara"},
                {id: "s",desc: "El mejor bootcamp de JS",word: "skylab"},
                {id: "t",desc: "Tren de distancia corta",word: "metro"},
                {id: "u",desc: "En una ensalada",word: "rusa"},
                {id: "v",desc: "V for",word: "vendetta"},
                {id: "w",desc: "Marca de coche",word: "bmw"},
                {id: "x",desc: "Rayos-",word: "x"},
                {id: "y",desc: "El dia despues de anteayer",word: "ayer"},
                {id: "z",desc: "La fruta que crece bajo-tierra",word: "zanahoria"}];


userStart.addEventListener("click", AtoZ);              // when user clicks 'starts', fires the function AtoZ
userRestart.addEventListener("click", restart);        // when user clicks 'reset', fires the function restart

function AtoZ() {
    var goodAnswer = 0, badAnswer = 0, nthItem = 0, totalPoints;   // initialize counter for good, bad, loop-start and total points
    userDesc.innerHTML = allLetters[0].desc;        // show description for first word to start loop
    
    while (nthItem < allLetters.length) {                     // conditional to iterate through all objects in the array
      userInput.innerHTML = "";                              // clears the input spaces in DOM after every iteration
      userDesc.innerHTML = allLetters[nthItem].desc;                 
      if (userConfirm.clicked == true) {                  // if user submits answer -> compare it and show results
          compare();
          nthItem++;
      }
      function compare() {
          if (userInput.value == allLetters[nthItem].word) {  // checks if user entered value is correct, wrong, pasapalabra or exit
              goodAnswer++;
              userTrue.innerHTML = goodAnswer;            // if correct -> adds +1 to correct counter and writes in HTML
          } else if (userInput.value == "pasapalabra") { // if pasapalabra -> no change, just shows the same previous value
              goodAnswer += 0;
          } else if (userInput.value == "exit") {        // if exit -> breaks the 'forEach' loop
              restart();
          } else {                                     // if wrong -> adds +1 to wrong counter, shows answer and writes in HTML
              badAnswer++;
              userFalse.innerHTML = badAnswer;
              if (allLetters[nthItem].word.startsWith(allLetters[nthItem].id)) {
                  userDesc.innerHTML = "Starts with the letter " + allLetters[nthItem].id + " :" + allLetters[nthItem].word;
              } else {
                  userDesc.innerHTML = "Contains the letter " + allLetters[nthItem].id + " : " + allLetters[nthItem].word;
              }
          }
      }
    };      
    totalPoints = correct - wrong;                          // shows the average points scored at the end and writes in HTML
    userTotal.innerHTML = "Congratulation!! You scored " + totalPoints + " points.";
}

function restart() {
    var resetChoice = alert("This will reset your progress!! Press 'OK' to reset or 'Cancel' to continue");
    if (resetChoice) {
        userTotal.innerHTML = "";                           // clearing the final results of earlier game
        AtoZ();
    }
}