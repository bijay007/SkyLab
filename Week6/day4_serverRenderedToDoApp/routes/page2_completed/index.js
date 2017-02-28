const express = require('express')
const router = express.Router()
const writeFile = require('../js/writeFile.js')

let tasks = require('../db/tasks.json')

router.get('/completed', (req, res) => { // renders completed tasks on page 2
  const title = 'Task Completed'
  let completedTasks = tasks.filter(elem => elem.completionDate)
  res.render('completed', {title, completedTasks})
})

router.get('/delete/:id', (req, res) => {  // deleting completed task on page 2
  let id = req.params.id
  tasks = tasks.filter(elem => elem.id !== id)
  writeFile(tasks)
  res.redirect('/completed')
})
module.exports = router
