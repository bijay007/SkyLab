const express = require('express')
const router = express.Router()

const getClients = require('./handlers/getAll')
const addClient = require('./handlers/addClient')

// for certain method to certain url, route the request using certain module

router.get('/', getClients)  // (localhost:3000/allclients/ -- already defined in app.js...)
router.post('/', addClient) // (..so when you do '/', the above is already added earlier)

module.exports = router
