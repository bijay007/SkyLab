describe ('The function sum ', function () { // what functions are inside

	it ('must exist.', function () {		// expected behaviours of the sum function (behaviour 1 is checking if the function is defined)
		expect (sum).toBeDefined()
	})

	it ('should return a number when executed.', function () { // behaviour 2 (checks if typeof result is the same as returned by sum(x,y))
		var result = sum ()
		expect (typeof result).toEqual('number')
	})

	it ('should return 5 when sum (2, 3)', function () {
		var result = sum (2, 3)
		expect (result).toEqual(5)
	})

	it ('should return 10 when sum (\'7\',\'3\')', function () {
		var result = sum ('7', '3')
		expect (result).toEqual(10)
	})
})
