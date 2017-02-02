angular.module('songFinderApp', []) // 1st step we pass main directive and dependecy to module
  .controller('searchBoxController', function ($scope) { // 2nd step we define a controller for the first form. it contains variables in scope for it
    $scope.userFormSubmission = function () {      // 3rd step we assign user-submitted-value to the scope of form ($scope object).
      $scope.userFormSubmission
    }
  })
