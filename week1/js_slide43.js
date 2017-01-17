// Multiplcation table from 1 to 10, all in different lines
(function multiTable(a) {
var currentLine = "";
	for (var i=1; i<=a; i++) {
		for (var j=1; j<=a; j++) {
			currentLine += i*j + " ";
		}
	currentLine += " " + '\n';
	}
return currentLine;
}(10));

// color in RGB representation
(function getRGB(hex) {
	var RGB;
	switch (hex) {
		case "#ff0000":
			RGB = "Red";
			break;
		case "#00ff00":
			RGB = "Green";
			break;
		case "#0000ff":
			RGB = "Blue";
			break;
		default:
			RGB = (function() {
					var removeHash = hex.slice(1,hex.length);
					var Red = parseInt(removeHash.slice(0,2),16);
					var Green = parseInt(removeHash.slice(2,4),16);
					var Blue = parseInt(removeHash.slice(4,6),16);
					return {Red,Green,Blue};
					}());
			break;
	}
	return RGB;
}("#fa12c5"));

// maximum of three numbers
(function compare(a,b,c) {
	var largest;
	if (a>b && a>c) {
		largest = a;
	} else if (b>a && b>c) {
		largest = b;
	} else {
		largest = c;
	}
	return "Largest among " + a + "," + b + "," + c + " is : " + largest;
}(5,2,8));