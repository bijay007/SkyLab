function reverse(){
	var arrayReverse = [getInput()];		// array containing user input and future reversed numbers
	var limit = getInput().toString().split("");	// breaking user number into an array of strings
	var shiftedElement, pushedElement;
	
	for (var i=0; i<limit.length-1; i++) {
		shiftedElement = limit.shift();		// extract the first element from the array
		limit.push(shiftedElement);			// push the first element to the end of array
		pushedElement = limit.join("");		// convert the array into string and save it in variable 'pushedElement'
		arrayReverse.push(pushedElement);	// add the string into the array containing user entered number
	}

var showResults = document.getElementById("resultbox");	// the final array with reversed item is shown here
showResults.value = arrayReverse;
}

function getInput(){						// asks the user for a number and returns it
	var userInput = document.getElementById('userinput');
	return userInput.value;
}

var submitButton = document.getElementById("submit");	// EventListener for submit button which invokes the main function
submitButton.addEventListener("click",reverse);