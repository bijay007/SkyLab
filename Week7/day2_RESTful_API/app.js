const express = require('express')
const MongoClient = require('mongodb').MongoClient

// importing modules
const getFilterParams = require('./middlewares/getFilterParams')
const getRestaurants = require('./routes/restaurants/getRestaurants')
const getBorough = require('./routes/restaurants/getBorough')
const getCuisine = require('./routes/restaurants/getCuisine')
const get1Restaurant = require('/routes/restaurant')

const app = express()

const url = 'mongodb://localhost:27017/test'
const PORT = 3000

MongoClient.connect(url)
  .then(db => {
    app.use(getFilterParams)

    app.get('/restaurants', getRestaurants.bind(null, db))
    app.get('/restaurants/borough/:borough', getBorough.bind(null, db))
    app.get('/restaurants/cuisine/:cuisine', getCuisine.bind(null, db, false))
    app.get('/restaurants/cuisine/not/:cuisine', getCuisine.bind(null, db, true))
    app.get('/restaurant', get1Restaurant.bind(null, db))
  })

app.listen(PORT, () => console.log(`🚀 Magic happens at PORT ${PORT}...`))
