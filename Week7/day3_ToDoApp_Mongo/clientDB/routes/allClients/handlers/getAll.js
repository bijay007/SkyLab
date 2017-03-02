const ClientModel = require('../../../schemas/client')

module.exports = (req, res) => {
  ClientModel.find()
  .then(clients => res.json(clients))
  .catch(err => { throw err })
}
