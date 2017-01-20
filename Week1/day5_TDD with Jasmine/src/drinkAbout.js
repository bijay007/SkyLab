function peopleWithAgeDrink (num) {
	if (num < 14) {
		return 'drink toddy'
	} else if (num >=14 && num<18) {
		return 'drink coke'
	} else if (num >= 18 && num<21) {
		return 'drink beer'
	}
	return 'drink whisky'
}