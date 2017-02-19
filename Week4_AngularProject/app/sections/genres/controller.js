(function () {
  angular.module('app')
    .controller('GenreController', GenreController)

  function GenreController ($routeParams, MovieHubFactory) {
    var vm = this
    vm.moviePrePath = 'https://image.tmdb.org/t/p/w150'
    vm.urlName = $routeParams.name
    vm.genreID = parseInt(vm.urlName)
    vm.genreName = vm.urlName.match(/[a-zA-Z]/g).join('')
    vm.query = ''

    MovieHubFactory.getMoviesByGenre(vm.genreID)
      .then(function (response) {
        vm.movies = response
      })
  }
})()

