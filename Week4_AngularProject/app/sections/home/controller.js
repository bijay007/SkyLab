
(function () {
  angular
      .module('app')
      .controller('HomeController', HomeController)

  function HomeController (MovieHubFactory, genresConfig) {
    var vm = this

    vm.allGenresList = genresConfig

    // generate random num from 1 to 19 (ajax request returns array of size 20)

    var randomIndex
    vm.imgUrl = 'https://image.tmdb.org/t/p/w500/'
    vm.generateRandom = function () {
      return Math.floor(Math.random() * 20)
    }

    // show random movie image from the three categories below

    MovieHubFactory.getNowPlaying()
      .then(function (response) {
        randomIndex = vm.generateRandom()
        vm.imgNowPlaying = vm.imgUrl + response[randomIndex].poster_path
        vm.titleNowPlaying = response[randomIndex].title
        vm.descNowPlaying = response[randomIndex].overview.split(' ').slice(0, 35).join(' ')
      })

    MovieHubFactory.getPopular()
      .then(function (response) {
        randomIndex = vm.generateRandom()
        vm.imgGetPopular = vm.imgUrl + response[randomIndex].poster_path
        vm.titleGetPopular = response[randomIndex].title
        vm.descGetPopular = response[randomIndex].overview.split(' ').slice(0, 35).join(' ')
      })

    MovieHubFactory.getTopRated()
      .then(function (response) {
        randomIndex = vm.generateRandom()
        vm.imgTopRated = vm.imgUrl + response[randomIndex].poster_path
        vm.titleTopRated = response[randomIndex].title
        vm.descTopRated = response[randomIndex].overview.split(' ').slice(0, 35).join(' ')
      })
  }
})()
