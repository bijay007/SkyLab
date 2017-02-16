// *** Let and Const ***
let creates a block-scope => variables declared with let are invisible outside the block (if, for etc)
const makes a varibale constant => unchangeble

// *** String Templates ***
var name = `hello,     // no need to add \n
      I'm Bijay`

var myName = 'bijay'
var greeting = `hello, ${myName}`
=> "hello, bijay" // expression inside ${} are calculated

var calc = `look, ${[1,2].map(x => x*2)}`  // power of ``
=> "look, 2,4"

// *** Enhanced object literals ***
// helps create objects dynamically inside an object
// with . you can only do accessing but with [] you can insert string templates. for eg.
var me = {
  name : 'bijay'
  home : 'haha'
  [`me ${name}`]: "i'm bijay" // we dynamically added a 3rd property called ' me bijay : "i'm bijay" '
}

//*** Destructuring ***
var [bijay,josep,xavier,carles] = ['best','veryGood','veryGood','veryGood'] // for arrays

var person = {
  name: 'John',
  surname: 'Doe',
  dateOfBirth: {
    year: 1988
  }
}
var {name, surname, dateOfBirth: {year}, children} = customer;  // for objects
// you don't have to do things like: *** var year = person.dateOfBirth.year ** 
// if you want another name like: *** var myBirthYear = person.dateOfBirth.year *** you will have to do:
// var {name, surname, myBirthYear : dateOfBirth : {year}, children}

// Extras : accessing specific element of array or string. eg
var [letters] = 'bijay'
letters => 'b' // left side is a single varible while right is string of 5 elements
letters[0] => 'b'
var [,,thirdLetter,,] = 'bijay' // you don't need the commas after thirdLetter if you don't need them
thirdLetter => 'j'

// Rest operator
var numbers = [1,2,3]
var power = (..operation)=> numbers.map(items => items*operation)
