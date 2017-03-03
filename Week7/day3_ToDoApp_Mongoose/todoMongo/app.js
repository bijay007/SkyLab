const express = require('express')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
const app = express()
const PORT = process.argv[2] || 3000
const bodyParser = require('body-parser')
const url = 'mongodb://localhost:27017/todo'
// const filterParams = require('./middleware/filter')
const getTasks = require('./routes/getTasks')
const addTasks = require('./routes/addTasks')
// const updateTasks = require('./routes/updateTasks')

MongoClient.connect(url)
.then(db => {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  // app.use(filterParams)
  app.get('/tasks', getTasks.bind(null, db))
  app.post('/tasks', addTasks.bind(null, db))
  // app.put('/tasks/:id', updateTasks.bind(null, db))
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`)) // npm run dev

// In mongoose, Task is the model for the collection called 'task' whose schema is defned by 'TaskSchema'
