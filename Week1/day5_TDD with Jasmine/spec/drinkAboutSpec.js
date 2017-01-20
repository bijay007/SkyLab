describe ('The function peopleWithAgeDrink ', function () { // function that checks multiple conditions

	it ('must exist.', function () {		// the function should have been defined
		expect (peopleWithAgeDrink).toBeDefined()
	})

	it ('should receive only 1 parameter.', function () { // checks that only a single argument is passed to the function
		var result = peopleWithAgeDrink.length
		expect (result).toEqual(1)
	})

	it ('should return a string when executed.', function () { // checks that the returned value is a string
		expect (typeof result).toEqual('string')
	})

	it ('should return drink teddy when peopleWithAgeDrink(13)', function () { // checks if age is X (upto 14), the result is 'drink teddy'
		var result = peopleWithAgeDrink (13)
		expect (result).toEqual('drink toddy')
	})

	it ('should return drink coke when peopleWithAgeDrink(17)', function () {
		var result = peopleWithAgeDrink (17)
		expect (result).toEqual('drink coke')
	})

	it ('should return drink beer when peopleWithAgeDrink(18)', function () {
		var result = peopleWithAgeDrink (18)
		expect (result).toEqual('drink beer')
	})

	it ('should return drink whisky when peopleWithAgeDrink(21)', function () {
		var result = peopleWithAgeDrink (21)
		expect (result).toEqual('drink whisky')
	})
})