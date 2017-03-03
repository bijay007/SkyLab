const mongoose = require('mongoose')
const collection = 'ClientCollection'

const ClientSchema = new mongoose.Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true},
  contractStatus: {type: Boolean, default: true},
  lastAccess: Number
}, {collection})

module.exports = mongoose.model('ClientModel', ClientSchema)
