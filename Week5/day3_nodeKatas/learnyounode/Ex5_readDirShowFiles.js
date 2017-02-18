var fs = require('fs')
var path = require('path')
var dirPath = process.argv[2]
var fileExt = '.' + process.argv[3]
fs.readdir(dirPath, (error, listFiles) => {
  if (error) throw error
  listFiles.forEach(item => {
    if (path.extname(item) === fileExt) {
      console.log(item)
    }
  })
})
