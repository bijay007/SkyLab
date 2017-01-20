describe ('The function peopleWithAgeDrink ', function () { // what functions are inside

	it ('must exist.', function () {		// expected behaviours of the sum function (behaviour 1 is checking if the function is defined)
		expect (peopleWithAgeDrink).toBeDefined()
	})

	it ('should receive only 1 parameter.', function () { // behaviour 2 (checks if typeof result is the same as returned by sum(x,y))
		var result = peopleWithAgeDrink.length
		expect (result).toEqual(1)
	})

	it ('should return a string when executed.', function () { // behaviour 2 (checks if typeof result is the same as returned by sum(x,y))
		var result = peopleWithAgeDrink ()
		expect (typeof result).toEqual('string')
	})

	it ('should return drink teddy when peopleWithAgeDrink(13)', function () {
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