// OBJECT LITERALS (just a static object)
var student = {
	namee : "Tony",
	agee : "VII",
	idd : 1
};
console.log(student.namee,student.agee,student.idd);

// FUNCTION CONSTRUCTER (create new instances of alumno which contains all its properties and methods)
function alumno(name,age,id) {
	this.nombre = name;
	this.edad = age;
	this.pin = id;
}
var toni = new alumno("Tony","VII",1);
console.log(toni.nombre,toni.edad,toni.pin);

console.log(toni.edad = "XI");
console.log(delete toni.id);

for (var i in toni){
	console.log(i + ":" + toni[i]);   //IF I DO "toni.i", IT GIVES "undefined"
}
console.log("Object.keys(objName): " + Object.keys(toni));
console.log("Object.getOwnPropertyNames(obj): " + Object.getOwnPropertyNames(toni));

// OBJECT.CREATE() -> helps create new objects from the main object unlike object literal pattern(it's like function constructer)
var bijay = Object.create(alumno);
bijay.city = "Barcelona";
bijay.fullName = bijay.nombre;
delete bijay.nombre;
bijay.fullName = "Bijayyy";
console.log("Hello, My name is " + bijay.fullName + " and I live in " + bijay.city);
console.log("constructer of bijay is alumno which still has nombre property for future objects. eg " + toni.nombre);	