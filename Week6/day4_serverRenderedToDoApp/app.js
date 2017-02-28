const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const todoPage = require('./routes/page1_todo')
// const completedPage = require('./routes/page2_completed')

// Setting Middlewares
app.set('view engine', 'pug')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Specifying where to search for index.js file when in specific page url
app.use('/', todoPage)
// app.use('/completed', completedPage)

app.listen(3000, () => console.log('Listening on PORT 3000...'))
