angular.module('myMovies')
  .controller('LatestReleases', function ($scope, MoviesFactory) {
    MoviesFactory.getLatestMovie() // getLatestMovie() gives a $$state object and response is $$state.value
    .then(function (response) {
      $scope.movies = response.data
      $scope.genres = response.data.genres
    })
  })

// (function() {
// 	angular.module('')
// 	.controller('LatestReleases', LatestReleases){
// 		function LatestRelease() {

// 		}
// 	}
// }())
