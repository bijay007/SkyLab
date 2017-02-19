(function () {
  angular.module('app')
    .controller('InfoMovieController', InfoMovieController)

  function InfoMovieController ($routeParams, MovieHubFactory) {
    var vm = this
    vm.moviePrePath = 'https://image.tmdb.org/t/p/w150'
    vm.urlName = $routeParams.name
    vm.movieID = parseInt(vm.urlName)
    vm.movieName = vm.urlName.match(/[a-zA-Z]/g).join('')
    vm.query = ''

    MovieHubFactory.getInfoMovie(vm.movieID)
    .then(function (data) {
      vm.movie = data
    })
  }
})()

