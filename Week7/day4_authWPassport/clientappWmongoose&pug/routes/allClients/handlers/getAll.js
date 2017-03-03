const ClientModel = require('../../../schemas/client')

module.exports = (req, res) => {
  ClientModel.find()
  .then(clients => res.render('allclients', {clients}))
  .catch(err => { throw err })
}
