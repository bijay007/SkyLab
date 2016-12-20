var currentIndex = 0, correctCounter = 0, wrongCounter = 0, totalPoints;  // List of global counter variables

userStart.addEventListener("click", startGame);   // starts new game on 'start' button press
function startGame(){
  // unhide other stuffs
  var userChoice = confirm("This will start a new game!! Press 'OK' to play or 'Cancel' to End");
  if (userChoice) {
    currentIndex = 0;
    userTotal.innerHTML = "Final results : _________________";
    askQuestions();
  } else {
    alert("Sorry to see you go. You can play anytime again !!");
  }
};

function askQuestions() {              // function that displays description of the array objects
  if (currentIndex < allLetters.length) {
    var currentQuestion = allLetters[currentIndex];
    userDesc.innerHTML = currentQuestion.desc;
  } else {
    totalPoints = correct - wrong;
    userTotal.innerHTML = "Congratulation!! You scored " + totalPoints + " points.";

  }
}

userSubmit.addEventListener("click", submitPressed);   // executes when user enters his/her word and presses 'submit'
function submitPressed() {
  if (userInput.value == allLetters[currentIndex].word) {
      correctCounter++;
      userRightAns.innerHTML = correctCounter;
  } else if (userInput.value == "pasapalabra") {
      correctCounter += 0;
  } else if (userInput.value == "exit") {
      totalPoints = correct - wrong;
      userTotal.innerHTML = "Congratulation!! You scored " + totalPoints + " points.";
      startGame();
  } else if (Number.isInteger(userInput.value)) {
      alert("No es un juego de PasaNúmeros. Introduzca solo palabras porfavor !!");
      wrongCounter++;
      userWrongAns.innerHTML = wrongCounter;
  } else {
      wrongCounter++;
      userWrongAns.innerHTML = wrongCounter;
      if (allLetters[currentIndex].word.startsWith(allLetters[currentIndex].id)) {
          userDesc.innerHTML = "Empieza con la letra " + allLetters[currentIndex].id + " :" + allLetters[currentIndex].word;
      } else {
          userDesc.innerHTML = "Contiene la letra " + allLetters[currentIndex].id + " : " + allLetters[currentIndex].word;
      }
  }
  currentIndex++;
  askQuestions();
}