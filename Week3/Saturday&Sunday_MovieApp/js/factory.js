angular.module('myMovies')
.factory('MoviesFactory', function ($http) {  // you can also change factories with service
  var apiKey = '0ea733e6e9ff0120779fcfb8e7b9439d' // difference is service is constructor function

  function getLatestMovie () {            // while factories are...(line 14)
    var url = 'https://api.themoviedb.org/3/movie/latest?language=en-US&api_key=<%KEY%>'
    var url = url.replace('<%KEY%>', apiKey)
    return $http.get(url)
  }

  function getnowPlaying () {
    var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + apiKey + ''
    return $http.get(url)
  }

  function getPopular () {
    var url = 'https://api.themoviedb.org/3/movie/157336?api_key=' + apiKey + '&append_to_response=videos,images'
    return $http.get(url)
  }

  return {   // factories are functions that return object
    getLatestMovie: getLatestMovie,
    getnowPlaying: getnowPlaying,
    getPopular: getPopular
  }
})

// with service you return :
// this.getLatest = getLatest;
// this.nowPlaying = nowPlaying;
