// Session 5 - Functions

function calculator(a,b){
	var sum, diff, mult,div;
	sum = a+b;
	diff = a-b;
	mult = a*b;
	div = a/b;
	if (isNaN(div)||(div==Infinity)){
		console.log("Error!! Either 0/0 (NaN) or N/0(Infinity) occured.");
	}
	return [sum,diff,mult,div];
}

var x = 5;
var y = 2;
var myFunction = calculator(x,y);

console.log("The sum,diff,mult and div are : " + myFunction);

function callCalculator(){
	var randA = Math.floor(Math.random()*10)+1;
	var randB = Math.floor(Math.random()*10)+1;
	var x = calculator(randA,randB);
	return ("The value returned by calculator is: " + x);
}

function Generator() {
	var randA = Math.floor(Math.random()*10)+1;
	var randB = Math.floor(Math.random()*10)+1;
	return [randA,randB];
}
function father(){
	var arr = Generator();
	var add = calculator(arr[0],arr[1]);
	return add;
}
function average(){
	var x = Generator();
	var avg = (x[0]+x[1])/2;
	return y;
}

(function functionCollector(){
	console.log("Random numbers are : " + Generator());
	console.log("Their sum,diff,mult and div are : " + father());
	console.log("Their average is : " + average());
})();