angular.module('myMovies')
.controller('Popular', function ($scope, MoviesFactory) {
  $scope.section = 'Most Popular'
  MoviesFactory.getPopular()
  .then(function (response) {
    console.log(response)
    $scope.movies = response.data.videos.results
  })
})
