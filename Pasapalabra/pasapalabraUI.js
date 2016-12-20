"use strict"
var userSubmit = document.getElementById("submit");
var userInput = document.getElementById("word");
var userDesc = document.getElementById("descrip");
var userRightAns = document.getElementById("correct");
var userWrongAns = document.getElementById("wrong");
var userTotal = document.getElementById("showPoints");
var userStart = document.getElementById("start");

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

var currentIndex = 0, correctCounter = 0, wrongCounter = 0, totalPoints = 0;   // initialize global variable counters

userStart.addEventListener("click", startGame);   // starts new game on 'start' button press
function startGame(){
  var userChoice = confirm("Empieza un juego nuevo!! Pulsa 'OK' para jugar o 'Cancel' para salir");
  if (userChoice) {
    userTotal.innerHTML = "A jugar !! (El resultado final se mostrara aqui)";
    askQuestions();
  } else {
    alert("Siento tristeza verte ir !!");
  }
};

function askQuestions() {                           // displays description of the array objects in every iteration
  if (currentIndex < allLetters.length) {
    var currentQuestion = allLetters[currentIndex];
    if (currentQuestion.word.startsWith(currentQuestion.id)) {
      userDesc.innerHTML = "Empieza con " + currentQuestion.id + " : " + currentQuestion.desc;
    } else {
      userDesc.innerHTML = "Contiene " + currentQuestion.id + " : " + currentQuestion.desc;
    }
    userInput.value = "";
  } else {
    totalPoints = correctCounter - wrongCounter;
    userTotal.innerHTML = "Enhorabueno!! Has conseguido " + totalPoints + " puntos.";
  }
}

userSubmit.addEventListener("click", submitPressed);    // executes when user enters his/her word and presses 'submit'
function submitPressed() {
  if (userInput.value == allLetters[currentIndex].word) {
      correctCounter++;
      userRightAns.innerHTML = correctCounter;
  } else if (userInput.value == "pasapalabra") {
      correctCounter += 0;
  } else if (userInput.value == "exit") {
      restart();
  } else if (isNaN(userInput.value) == false) {
      alert("No es un juego de PasaNúmeros. Introduzca solo palabras porfavor !!");
      wrongCounter++;
      userWrongAns.innerHTML = wrongCounter;
  } else {
      wrongCounter++;
      userWrongAns.innerHTML = wrongCounter;
      /*if (allLetters[currentIndex].word.startsWith(allLetters[currentIndex].id)) {
          userDesc.innerHTML = "Empieza con la letra " + allLetters[currentIndex].id + " :" + allLetters[currentIndex].word;
      } else {
          userDesc.innerHTML = "Contiene la letra " + allLetters[currentIndex].id + " : " + allLetters[currentIndex].word;
      } */
  }
  currentIndex++;               // increase the counter for array iterator and goes to ask new question
  askQuestions();
}

function restart() {
  totalPoints = correctCounter - wrongCounter;
  userTotal.innerHTML = "No era una decision buena. Has conseguido solo " + totalPoints + " puntos.";
  userDesc.innerHTML = "", userWrongAns.innerHTML = "", userRightAns.innerHTML = "Refresh to play again";
  var next = confirm("Jugar de nuevo??");
  if (next) {
    startGame();
  }
}
