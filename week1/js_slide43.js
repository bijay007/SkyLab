// Multiplcation table from 1 to 10, all in different lines
(function multiTable() {
var currentLine = "";
	for (var i=1; i<11; i++) {
		for (var j=1; j<11; j++) {
			currentLine += i*j + " ";
		}
	currentLine += '\n';
	}
return currentLine;
}());