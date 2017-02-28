const express = require('express')
const newDateFormat = require('../js/date.js')
const router = express.Router()
const writeFile = require('../js/writeFile.js')

let tasks = require('../db/tasks.json')

router.completeTask = function (req, res) {
  let urlID = req.params.id
  tasks.map(task => {
    if (task.id === urlID) task.completionDate = 'Completed on ' + newDateFormat()
  })
  writeFile(tasks)
  res.redirect('/')
}

router.completeAll = function (req, res) { // mark all tasks as completed
  tasks.map(task => {
    task.completionDate = ' Force completed on ' + newDateFormat()
  })
  writeFile(tasks) // writing the tasks to JSON file
  res.redirect('/')
}

module.exports = router
