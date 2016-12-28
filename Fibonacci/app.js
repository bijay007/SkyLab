function fibonacci(){
	var limit = askInput();
	var x = 0, y = 1, next, old, arrayFibo=[x,y];
	console.log(arrayFibo);
	for (var i = 0; i<limit; i++) {
		next = x+y;
		x = y;
		y = next;
		arrayFibo.push(y);
		console.log(arrayFibo);
	}
	console.log(arrayFibo);
	var showResults = document.getElementById("resultbox");
	showResults.value = arrayFibo;

}

function askInput(){
	var userInput = document.getElementById('userinput');
	return userInput.value;
}

var submitButton = document.getElementById("submit");
submitButton.addEventListener("click",fibonacci);
