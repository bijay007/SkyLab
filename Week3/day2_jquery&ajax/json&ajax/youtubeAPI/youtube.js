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
    // var wrapperLink = $('a').attr('href', linkToVideo)
    $('h1').text(title)
    $('img').attr('src', thumbnail).wrap($('a').attr('href', linkToVideo))
    $('p').html().replace('views', viewCount)
  })
  .fail(function () {
    window.alert('404 not Found')
  })
  .always(function () {
    console.log('Found data!')
  })
})
