var spotifyApp = angular.module('spotifyApp', [])

spotifyApp.controller('SearchController', function ($scope, $rootScope, SpotifyFactory) {
  $scope.searchArtist = function (e) {
    e.preventDefault()
    SpotifyFactory.searchArtist($scope.search)
      .then(function (response) {
        $rootScope.artists = response.data.artists.items
        console.log($rootScope.artists)
      })
  }
})

spotifyApp.controller('ArtistsController', function ($scope) {

})

spotifyApp.factory('SpotifyFactory', function ($http) {
  function searchArtist (searchQuery) {
    var url = 'https://api.spotify.com/v1/search?type=artist&query=<%ARTIST-NAME%>'
    url = url.replace('<%ARTIST-NAME%>', searchQuery)

    return $http.get(url)
  }

  function searchAlbums () {

  }

  return {
    searchArtist: searchArtist,
    searchAlbums: searchAlbums
  }
})
