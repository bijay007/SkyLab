function fizzBuzz () {
	var out = []
	for(var i = 1; i <= 100; i++) {
		var aux = ''
		if(!(i % 3 === 0  || i % 5 === 0)) out.push(i)
		else {
			if(i % 3 === 0) aux += 'fizz'
			if(i % 5 === 0) aux += 'buzz'
			out.push(aux)
		}
	}
	console.log(out)
	return out
}