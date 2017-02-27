const express = require('express')
const newDateFormat = require('../js/date.js')
const writeFile = require('../js/writeFile.js')
const router = express.Router()

let tasks = require('../db/tasks.json')

router.addNewTask = function (req, res) {
  let taskBody = req.body.taskBody
  console.log(taskBody)
  let newTask = {                     // object with properties that we want to render to DOM
    id: '' + (tasks.length ? (+tasks[tasks.length - 1].id + 1) : 1), // assigning id to tasks starting from 1
    body: taskBody,
    creationDate: 'Created on ' + newDateFormat(),
    completionDate: ''
  }
  tasks.push(newTask)
  writeFile(tasks)
  res.redirect('/')
}

module.exports = router
