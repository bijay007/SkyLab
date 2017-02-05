angular.module('myMovies')
.controller('nowPlaying', function ($scope, moviesFactory) {
  moviesFactory.getnowPlaying()
  .then(function (response) {
  	$scope.movies = response.data.results
  	$scope.section = 'Currently Airing'
  	$scope.imgSrc = 'http://image.tmdb.org/t/p/w150/'
  })
  $scope.userTitle = ''
  $scope.search = function () { // not working
  	$scope.found = ''
  	$scope.found = $scope.movies.length
  }
})
