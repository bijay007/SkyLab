angular.module('app')
  .config(function ($routeProvider) {
    $routeProvider
    // when you are at home page - Level 0
      .when('/home', {
        templateUrl: 'app/sections/home/template.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
    // when you click a genre link - Level 1
      .when('/genre/:name', {
        templateUrl: 'app/sections/genres/template.html',
        controller: 'GenreController',
        controllerAs: 'vm'
      })
    // when you click a movie link - Level 2
      .when('/info_movie/:name', {
        templateUrl: 'app/sections/info_movie/template.html',
        controller: 'InfoMovieController',
        controllerAs: 'vm'
      })
      .otherwise('/home')
  })
