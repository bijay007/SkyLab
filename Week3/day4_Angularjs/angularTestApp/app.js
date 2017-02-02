angular.module('myApp', [])
.controller('showSum', function ($scope) {
})
.controller('listNames', function ($scope) {
  var students = ['Carles', 'Jonas', 'Bijay', 'Josep', 'Xavier', 'Ignasi', 'Ernesto', 'Stivali', 'Fran', 'Ezequiel', 'Alejandro', 'Oscar']
  $scope.allNames = students.map(function (elems) {
  	return elems.replace(/[aeiou]/g, '*') + ' contains ' + elems.length + ' letters.'
  })
})
