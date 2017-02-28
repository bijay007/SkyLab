module.exports = function () {
  let date = new Date()
  let day = date.getDate()
  let month = date.getMonth()
  let year = date.getFullYear()
  let h = addZero(date.getHours())
  let m = addZero(date.getMinutes())

  function addZero (i) {
    if (i < 10) {
      i = '0' + i
    }
    return i
  }

  return `${day} / ${month + 1} / ${year} at ${h}:${m}`
}
