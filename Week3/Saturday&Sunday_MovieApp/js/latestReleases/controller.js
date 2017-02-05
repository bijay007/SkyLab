angular.module('myMovies')
  .controller('latestReleases', function ($scope, moviesFactory) {
    moviesFactory.getLatestMovie() // getLatestMovie() gives a $$state object and response is $$state.value
    .then(function (response) {
      $scope.movies = response.data
      $scope.genres = response.data.genres
    })
  })
