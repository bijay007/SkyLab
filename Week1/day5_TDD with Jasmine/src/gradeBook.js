function gradeBook(x,y,z){
	var average = (x+y+z)/3
	if (average>=0 && average<60) {
		return 'F'
	}
	if (average>=60 && average<70) {
		return 'D'
	}
	if (average>=70 && average<80) {
		return 'C'
	}
	if (average>=80 && average<90) {
		return 'B'
	}
	if (average>=90 && average<100) {
		return 'A'
	}	
return ' '
}