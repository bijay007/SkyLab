const ClientModel = require('../../../schemas/client')

module.exports = (req, res) => {
  const {name, age} = req.body
  const lastAccess = Date.now()
  const newClient = new ClientModel({name, age, lastAccess})

  newClient.save()
  .then(newClient => {
    console.log('client has been added')
    res.status(200).json(newClient)
  })
  .catch(err => res.status(500).json(err))
}
