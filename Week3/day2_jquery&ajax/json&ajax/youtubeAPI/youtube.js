$('button').on('click', function () {
  $.ajax({
    url: 'youtube.json'
  })
  .done(function (returnedJSON) {
    var mainPath = returnedJSON.data.items[0] // this is reapeated path so yeah..

    var title = mainPath.title
    var thumbnail = mainPath.thumbnail.default
    var linkToVideo = mainPath.player.default
    var viewCount = mainPath.viewCount

    $('.hidden').removeClass('hidden')
    $('h1').text(title)
    $('img').attr({'src': thumbnail, 'display': 'block'}).wrap($('a').attr('href', linkToVideo))
    $('p span').text(viewCount)
  })
  .fail(function () {
    window.alert('404 not Found')
  })
  .always(function () {
    console.log('Found data!')
  })
})
