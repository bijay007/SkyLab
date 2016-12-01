		// STRINGS
		console.log("**** String Methods (Full Name = Bijay Timilsina)");
		var myName = "Bijay Timilsina";

		console.log("My name has " + myName.length + " letters");

		var x = myName.indexOf(" ");
		console.log("My last name is at position " + (x+1));

		console.log("My first name is " + myName.slice(0,x) );

		console.log("My last name is " + myName.slice((x+1),myName.length));

		var y = myName.replace("Bijay","Mr");
		console.log("Hello, " + y);

		console.log("My last name is " + myName.slice((x+1),myName.length).toUpperCase());

		console.log(myName.slice(0,x).concat(" "+"is awesome!"));

		console.log(myName.charAt(0).toUpperCase() + "." + myName.charAt(x+1).toUpperCase());

		console.log(myName.slice(0,x).split("/"));
		console.log("The above doesn't work. I need the words separated as array using '/' (eg. B/i/j/a/y).Any help appreciated :D");

		// NUMBERS
		console.log("****** Number Methods (Initial Number = 18.33) ******")
		var a = 18.33;
		var b = "It is" + " " + a + " " + "PM";
		console.log(b);

		console.log("It is around "+ a.toFixed(0) + " of evening");

		console.log(parseInt(a));

		var x = 12;
		var y = 7.5;
		console.log("Sum of " + x + " and " + y + " is " + (x+y) + ", difference is " + (x-y) + ", multiplication is " + (x*y) + " and division is " + (x/y));

		var i = 10;
		var j = "hour";
		console.log(i*j);

		if(isNaN(j)) {
			console.log("You can't do this operation");
		} else {
			console.log(i);
		}

		// DATES
		console.log("****** Date Methods *******");
		var d = new Date();

		console.log(d.getFullYear());

		console.log("Today is day " + d.getDate() + " of this month and day " + d.getDay() + " of this week.");

		d.setFullYear(1992, 11, 25);
		console.log("No of seconds from my birthday to now is : " + (d.getTime()/1000).toFixed(0)+ " seconds.");

		console.log(((((d.getTime()/1000)/60)/60)/24).toFixed(0) + " days");

		var now = new Date();
		var someday = new Date();
		someday.setFullYear(1986, 5, 10);
		if (someday < now) {
			console.log("Today is after " + someday);
		} else {
			console.log("Today is before " + someday);
		}

		console.log(someday.getFullYear() + " is before " + now.getFullYear());