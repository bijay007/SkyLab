$('#search-artists form').on('submit', function (event) {
  event.preventDefault()
  $('#select-album,#select-track').addClass('hidden') // hide earlier div when not the first-time
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
    optionsArtists.unshift('<option disabled selected>Select an artist...</option>')
    $('#list-artists').html(optionsArtists)
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
    var selectHTML = '<option disabled selected>Select an artist...</option>' + optionsAlbums.join('')
    $('#list-albums').html(selectHTML)
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
      return "<li><a href='" + elem.preview_url + "'>" + elem.name + '</a></li>'
    })
    $('#list-tracks').html(optionsAlbums.join(''))
    $('#select-track').removeClass('hidden')
  })
})
