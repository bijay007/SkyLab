describe ('The function gradeBook ', function () { // what functions are inside

	it ('must exist.', function () {		// expected behaviours of the sum function (behaviour 1 is checking if the function is defined)
		expect (gradeBook).toBeDefined()
	})

	it ('should receive 3 parameters.', function () { // behaviour 2 (checks if typeof result is the same as returned by sum(x,y))
		var result = gradeBook.length
		expect (result).toEqual(3)
	})

	it ('should return a string when executed.', function () { // behaviour 2 (checks if typeof result is the same as returned by sum(x,y))
		var result = gradeBook ()
		expect (typeof result).toEqual('string')
	})

	it ('should return F when gradeBook(x,y,z)<60', function () {
		var result = gradeBook (30, 20, 25)
		expect (result).toEqual('F')
	})

	it ('should return D when gradeBook(x,y,z)<70>=60', function () {
		var result = gradeBook (50,50,85)
		expect (result).toEqual('D')
	})

	it ('should return C when gradeBook(x,y,z)<80>=70', function () {
		var result = gradeBook (72, 74, 79)
		expect (result).toEqual('C')
	})
	it ('should return B when gradeBook(x,y,z)<90>=80', function () {
		var result = gradeBook (82, 84, 89)
		expect (result).toEqual('B')
	})
	it ('should return A when gradeBook(x,y,z)<100>=90', function () {
		var result = gradeBook (92, 94, 99)
		expect (result).toEqual('A')
	})
})