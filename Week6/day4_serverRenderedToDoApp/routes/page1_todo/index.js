const express = require('express')
const addTask = require('./operations/addTask.js')
// const deleteTask = require('./operations/deleteTask.js')
// const completeTask = require('./operations/completeTask.js')

let tasks = require('../../public/datafile/tasks.json')

const router = express.Router()

router.get('/', (req, res) => {
  const title = 'My Todo List'
  let counter = 0
  let todoTasks = tasks.filter(elem => !elem.completionDate) // filtering uncompleted tasks
  res.render('todo', {title, todoTasks, counter})
})
router.post('/add', addTask)
  // .get('/delete/:id', deleteTask)
  // .get('/completed/:id', taskCompletion.completeTask)
  // .get('/completedAll', taskCompletion.completeAll)

module.exports = router
