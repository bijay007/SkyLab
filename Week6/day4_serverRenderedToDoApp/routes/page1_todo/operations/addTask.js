const newDateFormat = require('../../../public/utils/date.js')
const fileName = 'public/datafile/tasks.json' // it's not require, so it takes static path
const fs = require('fs')

const tasks = require('../../../public/datafile/tasks.json')

module.exports = function (req, res) {
  let taskBody = req.body.taskBody
  let newTask = {                     // object with properties that we want to render to DOM
    id: '' + (tasks.length ? (+tasks[tasks.length - 1].id + 1) : 1), // assigning id to tasks starting from 1
    body: taskBody,
    creationDate: 'Created on ' + newDateFormat(),
    completionDate: ''
  }
  tasks.push(newTask)
  fs.writeFileSync(fileName, JSON.stringify(tasks, null, 2))
  res.redirect('/')
}
