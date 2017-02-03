angular.module('myApp')
  .factory('reposFactory', function ($http) {
    function getRepos (nameOfRepo) {
      return $http.get('https://api.github.com/users/' + nameOfRepo + '/repos')
    }
    return {
      getRepos: getRepos
    }
  })
