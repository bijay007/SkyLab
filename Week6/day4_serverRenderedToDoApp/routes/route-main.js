const express = require('express')
const addNewTask = require('./route-add.js')
const deleteTask = require('./route-delete.js')
const taskCompletion = require('./route-completed.js')
let tasks = require('../db/tasks.json')

const router = express.Router()
router.get('/', (req, res) => {
  const title = 'Your Todo List'
  let counter = 0
  let unfinishedTasks = tasks.filter(elem => !elem.completionDate) // filtering uncompleted tasks
  res.render('index', {title, unfinishedTasks, counter})
})
router.post('/add', addNewTask)
  .get('/delete/:id', deleteTask)
  .get('/completed/:id', taskCompletion.completeTask)
  .get('/completedAll', taskCompletion.completeAll)

module.exports = router
