angular.module('myMovies')
.factory('moviesFactory', function ($http) {
  var apiKey = '0ea733e6e9ff0120779fcfb8e7b9439d'
  function getMovies () {
    var url = 'https://api.themoviedb.org/3/movie/latest?language=en-US&api_key=<%KEY%>'
    var url = url.replace('<%KEY%>', apiKey)
    return $http.get(url)
  }
  return {
    getMovies: getMovies
  }
})
