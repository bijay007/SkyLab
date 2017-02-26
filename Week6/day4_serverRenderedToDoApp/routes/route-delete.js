const express = require('express')
const router = express.Router()
const writeFile = require('../js/writeFile.js')

let tasks = require('../db/tasks.json')

router.deleteTask = function (req, res) {
  let id = req.params.id
  tasks = tasks.filter(elem => elem.id !== id)
  writeFile(tasks)
  res.redirect('/')
}

module.exports = router
