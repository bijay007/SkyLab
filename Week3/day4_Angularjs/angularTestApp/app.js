
angular.module('myApp', [])
//  .controller('showSum', function ($scope) {
// })

  // .controller('listNames', function ($scope) {
  //   $scope.allNames = students.map(function (elems) {
  //     return elems.replace(/[aeiou]/g, '*') + ' contains ' + elems.length + ' letters.'
  //   })

  .controller('addremove', function ($scope) {
    var students = ['Carles', 'Jonas', 'Bijay', 'Josep', 'Xavier', 'Ignasi', 'Ernesto', 'Stivali', 'Fran', 'Ezequiel', 'Alejandro', 'Oscar']
    $scope.students = students

    $scope.addName = function (e) {
      e.preventDefault()
      $scope.students.push($scope.enterName) // you can also do students.push as they both point to same object
    }
    $scope.removeName = function (index) {
      $scope.students.splice(index, 1)
    }
  })
