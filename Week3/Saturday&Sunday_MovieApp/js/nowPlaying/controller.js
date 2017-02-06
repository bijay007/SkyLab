angular.module('myMovies')
.controller('NowPlaying', function ($scope, MoviesFactory) {
  $scope.section = 'Currently Airing'
  $scope.userTitle = ''
  $scope.search = function () { // not working
    $scope.found = $scope.movies.length
  }
  MoviesFactory.getnowPlaying()
  .then(function (response) {
    $scope.movies = response.data.results
    $scope.imgSrc = 'http://image.tmdb.org/t/p/w150/'
  })
})
