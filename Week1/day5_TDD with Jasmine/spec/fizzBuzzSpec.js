describe ('The function fizzBuzz ', function () {

	it ('must exist.', function () {
		expect (fizzBuzz).toBeDefined()
	})

	it ('must return an array', function () {
		var output = fizzBuzz()
		expect (output instanceof Array).toBeTruthy()
	})

	it ('must return an array of 100 pos', function () {
		var output = fizzBuzz()
		expect (output.length).toEqual(100)
	})

	it ('must return fizz in the position multiple of 3', function () {
		var output = fizzBuzz()[2]
		expect (output).toContain('fizz')
	})

	it ('must return buzz in the position multiple of 5', function () {
		var output = fizzBuzz()[4]
		expect (output).toContain('buzz')
	})

	it ('must return fizzbuzz in the position multiple of 5 & 3', function () {
		var output = fizzBuzz()[14]
		expect (output).toEqual('fizzbuzz')
	})
})