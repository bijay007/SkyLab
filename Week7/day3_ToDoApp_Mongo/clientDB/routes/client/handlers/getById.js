const ClientModel = require('../../../schemas/client')

module.exports = (req, res) => {
  const { id } = req.params

  ClientModel.findById(id)
  .then(client => {
    console.log(`client with id ${id} was found !`)
    res.status(200).json(client)
  })
  .catch(err => res.status(500).json(err))
}
