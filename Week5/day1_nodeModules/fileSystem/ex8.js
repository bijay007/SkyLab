/* Write a node.JS program that shows you the local hour of server.

Hint: You need npm module -> strftime */

const time = require('strftime')
const spainTime = time.localizeByIdentifier('es_ES')

function showHour () {
  var date = new Date()
  // return date.time('%H:%M')
  return time('%H:%M', date)
}
console.log('The time in spain is ' + showHour())
