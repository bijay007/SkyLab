const fileName = '../db/tasks.json'
const fs = require('fs')

module.exports = function (tasksToWrite) {
  fs.writeFile(fileName, JSON.stringify(tasksToWrite, null, 2), function (err) {
    if (err) return console.log(err)
  })
}
