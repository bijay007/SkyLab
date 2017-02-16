var fs = require('fs')
var path = require('path')

module.exports = function( dirname, extension, callback) {
  fs.readdir(dirname, function(error, list) {
    if (error) return callback( error, null )
    var files = list.filter(function(item) {
      return path.extname(item) === '.' + extension
    })
    callback( null, files )
  })
}
