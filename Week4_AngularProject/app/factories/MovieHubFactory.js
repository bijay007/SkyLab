/* eslint no-undef: 'off' */

(function () {
  angular
    .module('app')
    .factory('MovieHubFactory', MovieHubFactory)

  function MovieHubFactory ($http, APIKey) {
    var apiKey = APIKey

    var factoryObject = {
      getMoviesByGenre: getMoviesByGenre,
      getPopular: getPopular,
      getTopRated: getTopRated,
      getNowPlaying: getNowPlaying,
      getInfoMovie: getInfoMovie
    }

  // list of movies of a genre - page 1
    function getMoviesByGenre (genreID) {
      var url = 'https://api.themoviedb.org/3/genre/' + genreID + '/movies?api_key=' + apiKey + '&language=en-US'
      return $http.get(url)
        .then(response => response.data.results)
    }

  // extract info of specific movie - page 2
    function getInfoMovie (filmID) {
      return $http.get('https://api.themoviedb.org/3/movie/' + filmID + '?api_key=' + apiKey + '&language=en-US')
      .then(response => response.data)
    }

// ****** get most popular, upcoming and toprated of all movies for Carrousel in home page ***//
    function getPopular () {
      var url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US'
      return $http.get(url)
        .then(response => response.data.results)
    }
    function getTopRated () {
      return $http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=' + apiKey + '&language=en-US&page=1')
      .then(response => response.data.results)
    }
    function getNowPlaying () {
      return $http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=' + apiKey + '')
      .then(response => response.data.results)
    }

// find most latest movies of a specific genre only
//     function getNowPlayingGenre (genreID) {
//       return $http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=' + apiKey + '')
//       .then(function (response) {
//         return response.data.results
//       })
//       .then(function (response) {
//         return response.filter(function (movie) {
//           return movie.genre_ids.indexOf(genreID) !== -1
//         })
//       })
//     }

    return factoryObject
  }
})()

