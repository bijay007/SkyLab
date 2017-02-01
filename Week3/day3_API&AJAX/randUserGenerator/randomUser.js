$('.get-profile').on('click', function () {
  $.ajax({
    url: 'https://randomuser.me/api/'
  })
  .done(function (response) {
    var countries = {
      AU: 'Australia',
      BR: 'Brazil',
      CA: 'Canada',
      CH: 'Switzerland',
      DE: 'Germany',
      DK: 'Denmark',
      ES: 'Spain',
      FI: 'Finland',
      FR: 'France',
      GB: 'United Kingdom',
      IE: 'Ireland',
      IR: 'Iran',
      NL: 'Netherlands',
      NZ: 'New Zealand',
      TR: 'Turkey',
      US: 'United States of America'
    }
    var commonPath = response.results[0]
    console.log(commonPath)
    var registered = commonPath.registered
    var dob = commonPath.dob
    var nationality = commonPath.nat

    var gender = commonPath.gender
    var homeaddress = commonPath.location.street + '\n' + commonPath.location.city + '\n' + commonPath.location.state + '\n' + commonPath.location.postcode
    var email = commonPath.email
    var phoneNo = commonPath.phone
    var cellNo = commonPath.cell
    var photo = commonPath.picture.medium
    function fullNameCountry (abbr) {
      return countries.hasOwnProperty('abbr') ? countries.abbr : abbr
    }

    $('.registration-date').text(registered.slice(0, 10))
    $('.born-date').text(dob.slice(0, 10))
    $('.nationality span').text(fullNameCountry(nationality)) // function doesn't work
    $('.gender').text(gender)
    $('.address').text(homeaddress) // doesn't recognize newline
    $('.email').text(email)
    $('.phone').html('<span>' + 'Cell : ' + '<span>' + cellNo + '\n' + '<span>' + 'Phone : ' + '<span>' + phoneNo)
    $('img').attr('src', photo)
  })

  // $.ajax({   => multiple ajax calls on same callback function possible? => maybe Promises??
  //   url: 'http://flag-icon-css.lip.is/'
  // })
  // .done(function (response) {
  //   console.log(response)
  // })
})
