$('#search-beers form').on('submit', function (e) {
  e.preventDefault()
  $('#show-info').addClass('hidden')
  var urlSearch = 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=<%QUERY%>'
  var valueSearched = $(this).find('input').val()
  var urlFilled = urlSearch.replace('<%QUERY%>', valueSearched)

// sending request with user-input
  $.ajax({
    url: urlFilled
  })
  .done(function (response) {
    var allBeers = response
    var beerNames = allBeers.map(function (elem) {
      return "<option value='" + elem.id + "'>" + elem.name + '</option>'
    })
    var selectHTML = '<option disabled selected>Select your favorite...</option>' + beerNames.join('')
    $('#list-beers').html(selectHTML)
    $('#select-beer').removeClass('hidden')
  })
})

// after selecting the specific beer from dropdown-menu
$('#select-beer').change(function () {
  var urlSearch = 'https://quiet-inlet-67115.herokuapp.com/api/beer/<%ID-BEER%>'
  var valueSelected = $(this).find(':selected').val()
  var urlFilled = urlSearch.replace('<%ID-BEER%>', valueSelected)

  $.ajax({
    url: urlFilled
  })
  .done(function (response) {
    var imageSrc
    var name = response.name
    var description = response.description
    response.labels === undefined ? imageSrc = 'http://www.51allout.co.uk/wp-content/uploads/2012/02/Image-not-found.gif' : imageSrc = response.labels.medium
    var type = response.style.category.name
    $('.name').text(name)
    $('.type').html('<li>' + 'Beer type :' + type + '</li>')
    $('img').attr('src', imageSrc)
    $('.description').text(description)

    $('#show-info').removeClass('hidden')
  })
})
