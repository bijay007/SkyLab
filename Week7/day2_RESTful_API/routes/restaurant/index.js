const express = require('express')
const Router = express.Router

const getById = require('./handlers/getById')

function getRouter (db) {
  Router.get('/:id', getById.bind(null, db))
  return Router
}

module.exports = getRouter

