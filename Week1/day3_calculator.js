// Calculator for sum, diff, multi and division
function calculator (oper, num1, num2) {
  var result
  switch (oper) {
    case 'suma':
      result = function () {
        return num1 + num2
      }
      break
    case 'resta':
      result = function () {
        return num1 - num2
      }
      break
    case 'multiplicacion':
      result = function () {
        return num1 * num2
      }
      break
    case 'division':
      result = function () {
        return num1 / num2
      }
      break
    default:
      result = function () {
        return 'You have to enter the operation name followed by two numbers'
      }
      break
  }
  return result()
}
// calculator('operationYouWant', firstNumber, secondNumber)
calculator('suma', 2, 3)

// CALCULATOR++ -> enter random number of arguments
function calculatorPro () {
  var argsArray = Array.prototype.slice.call(arguments)
  var numbers = argsArray.slice(1, argsArray.length)
  var result = 0
  var arrItems
  if (argsArray[0] === 'suma') {
    result = suma()
  } else if (argsArray[0] === 'resta') {
    result = resta()
  } else if (argsArray[0] === 'multiplicacion') {
    result = multiplicacion()
  } else {
    result = division()
  }
  function suma () {
    for (arrItems of numbers) {
      result += arrItems
    }
    return result
  }
  function resta () {
    for (arrItems of numbers) {
      result -= arrItems
    }
    return result
  }
  function multiplicacion () {
    result = 1
    for (arrItems of numbers) {
      result = result * arrItems
    }
    return result
  }
  function division () {
    result = numbers[0]
    for (var i = 1; i < numbers.length; i++) {
      result = result / numbers[i]
    }
    return result
  }
  return result
}
// same as above enter -> functionName('operation',num1,num2,.....numN). for eg.
calculatorPro('multiplicacion', 1, 5, 2, 3, 5, 3) // gives 450

// USING HIGHER ORDER FUNCTION
// eg. Sum function can be written as:

(function sum () {
  return Array.prototype.reduce.call(arguments, function (iniValue, elements) { // iniValue = 0 (we set it) and elements are elements of arguments in this case
    return iniValue + elements
  }, 0)
}(2, 3, 4, 5, 6))
