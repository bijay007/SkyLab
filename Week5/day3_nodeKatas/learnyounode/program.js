var dirname = process.argv[2]
var extension = process.argv[3]

var filterList = require('./filterList.js')

filterList( dirname, extension, function (error, data) {
  if (error) throw error
  console.log( data.join('\n') )
})

