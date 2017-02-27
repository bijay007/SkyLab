const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const mainRoute = require('./routes/route-main.js')
const completedRoute = require('./routes/route-page2-allCompleted.js')

app.set('view engine', 'pug')

// Setting Middlewares
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Specifying what modules to each for what route
app.use('/', mainRoute) // USE MIDDLEWARE??
app.use('/completed', completedRoute)

app.listen(3000, () => console.log('Listening on PORT 3000...'))
