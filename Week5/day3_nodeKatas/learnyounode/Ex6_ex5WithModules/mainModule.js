var fs = require('fs')
var path = require('path')

module.exports = (url, extension, callback) => {
  fs.readdir(url, (error, listFiles) => {
    if (error) return callback(error, null)
    var addToList = listFiles.filter(item => path.extname(item) === '.' + extension)
    callback(null, addToList)
  })
}
