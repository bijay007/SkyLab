function fibonacci(){
	var limit = askInput();
	var x = 0, y = 1, next, old, arrayFibo=[x,y];
	for (var i = 0; i<limit-2; i++) {
		next = x+y;
		x = y;
		y = next;
		arrayFibo.push(y);
	}
	var showResults = document.getElementById("resultbox");
	showResults.value = arrayFibo;
}
function askInput(){
	var userInput = document.getElementById('userinput');
	return userInput.value;
}
var submitButton = document.getElementById("submit");
submitButton.addEventListener("click",fibonacci);