function sum() {
  var sum = 0
  for (var i=0; i<arguments.length; i++ )  {
    sum += arguments[i]
  }
  return sum;
}

sum(2,3,45)
sum(2,4)
sum(2,4,4,5,3,64,3,2)


function sum(msg, ...numbers) {

  for (var i=0; i<numbers.length; i++ )  {
    sum += numbers[i]
  }
  return msg + sum;
}

function multiplier( mult, ...numbers) {
  return numbers.map( item => item*mult )
}


function sum(a,b,c) {
  return a+b+c
}

var numbers = [1,2,3]

var [op1,op2,op3] = numbers


sum(op1,op2,op3)

sum(...numbers)

var extraNumbers = [5,2,5,2,...numbers,43,5,23,5]

[5,2,5,2,1,2,3,43,5,23,5]






