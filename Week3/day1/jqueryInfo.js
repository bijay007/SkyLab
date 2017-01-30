// => jQuery returns a jQuery object which has its own methods (eg. has(), not() etc)
 // these methods are defined in the jQuery constructer function. 

/* !!! You cannot mix jQuery methods with native Javascript methods

eg. $("form").val() => gives the first element's value inside form
	document.getElementsByTagName('form')[0].value() => same as above, gives value of first input object
However,
	$("form")[2].val() => gives error as [] changes the expression to js native and it doesnt have val() method
	For this, $("form").eq(2).val() => eq() is a correct way as eq() is jQuery method which doesn't affect anything

$("somechild").closest("#someid") => finds the PARENT closest to the child with given id
Exists similar traversing methods for child and siblings