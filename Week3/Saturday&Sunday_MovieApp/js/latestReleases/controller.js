angular.module('myMovies')
  .controller('latestReleases', function ($scope, moviesFactory) {
    moviesFactory.getMovies() // getMovies() gives a $$state object and response is $$state.value
    .then(function (response) {
      $scope.movies = response.data
    })
  })
