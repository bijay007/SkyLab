const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const port = process.argv[2] || 3000
const urlDB = 'mongodb://localhost:27017/client'
const app = express()

mongoose.Promise = global.Promise

const allClients = require('./routes/allClients')
const client = require('./routes/client')

app.set('view engine', 'pug')

app.use(express.static('public'))
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

mongoose.connect(urlDB)

app.use('/allclients', allClients) // use a certain folder for certain major-route
app.use('/client', client)

app.listen(port, () => console.log(`💼 Client web server running on PORT ${port} 💼`))
