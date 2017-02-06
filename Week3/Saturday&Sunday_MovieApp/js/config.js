angular.module('myMovies')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/latestReleases/template.html',
        controller: 'LatestReleases'
      })
      .when('/nowPlaying', {
        templateUrl: 'js/nowPlaying/template.html',
        controller: 'NowPlaying',
        css: 'styles.css' // if this css is specific to this page only
      })
      .when('/popular', {
        templateUrl: 'js/popular/template.html',
        controller: 'Popular'
      })
      .when('/topRated', {
        templateUrl: 'js/topRated/template.html'
      })
      .when('/upcoming', {
        templateUrl: 'js/upcoming/template.html'
      })
  })
