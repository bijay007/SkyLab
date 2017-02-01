$('#search-artists form').on('submit', function (e) {
  e.preventDefault()
  $('#select-album').addClass('hidden')
  $('#select-track').addClass('hidden')

  var urlSearch = 'https://api.spotify.com/v1/search?type=artist&query=<%ARTIST-NAME%>'
  var valueSearched = $(this).find('input').val()
  var urlFilled = urlSearch.replace('<%ARTIST-NAME%>', valueSearched)

  $.ajax({
    url: urlFilled
  })
  .done(function (response) {
    var listArtists = response.artists.items
    var optionsArtists = listArtists.map(function (elem) {
      return "<option value='" + elem.id + "'>" + elem.name + '</option>'
    })
    var selectHTML = '<option disabled selected>Select an artist...</option>' + optionsArtists.join('')
    $('#list-artists').html(selectHTML)
    $('#select-artist').removeClass('hidden')
  })
})

// after selecting an artist from dropdown-menu
$('#select-artist').change(function () {
  var urlSearch = 'https://api.spotify.com/v1/artists/<ID-ARTIST>/albums'
  var valueSelected = $(this).find(':selected').val()
  var urlFilled = urlSearch.replace('<ID-ARTIST>', valueSelected)

  $.ajax({
    url: urlFilled
  })
  .done(function (response) {
    var listAlbums = response.items
    var optionsAlbums = listAlbums.map(function (elem) {
      return "<option value='" + elem.id + "'>" + elem.name + '</options>'
    })
    $('#list-albums').html(optionsAlbums.join(''))
    $('#select-album').removeClass('hidden')
  })
})

// after selecting an album from dropdown-menu
$('#select-album').change(function () {
  var urlSearch = 'https://api.spotify.com/v1/albums/<ID-ALBUM>/tracks'
  var valueSelected = $(this).find(':selected').val()
  var urlFilled = urlSearch.replace('<ID-ALBUM>', valueSelected)

  $.ajax({
    url: urlFilled
  })
  .done(function (response) {
    var listTracks = response.items
    var optionsAlbums = listTracks.map(function (elem) {
      return "<a href='" + elem.preview_url + "'>" + elem.name + '</a>'
    })
    // adding all track links to separete <li> items and copying all of them combined to the ul
    var allLists = optionsAlbums.map(function (elem) {
      return '<li>' + elem + '</li>'
    })
    $('#list-tracks').append(allLists)
    $('#select-track').removeClass('hidden')
  })
})
