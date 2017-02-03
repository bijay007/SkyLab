angular.module('myApp')
  .controller('reposController', function ($scope, reposFactory) {
    // $http.get vs $.ajax

    $scope.addName = function (e) {
      e.preventDefault()
      reposFactory.getRepos($scope.newName)
        .then(function (response) {
          $scope.repos = response.data
        })
    }

    $scope.removeElement = function (index) {
      $scope.repos.splice(index, 1)
    }
  })
