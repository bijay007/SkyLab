var dirname = process.argv[2]
var extension = process.argv[3]

var filterList = require('./mainModule.js').list

filterList(dirname, extension, (error, data) => {
  if (error) throw error
  console.log(data.join('\n'))
})
