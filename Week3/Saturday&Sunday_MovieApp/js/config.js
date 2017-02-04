angular.module('myMovies')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/latestReleases/template.html',
        controller: 'latestReleases'
      })
      .when('/nowPlaying', {
        templateUrl: 'js/nowPlaying/template.html'
      })
      .when('/popular', {
        templateUrl: 'js/popular/template.html'
      })
      .when('/topRated', {
        templateUrl: 'js/topRated/template.html'
      })
      .when('/upcoming', {
        templateUrl: 'js/upcoming/template.html'
      })
  })
