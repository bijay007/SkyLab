module.exports = (db, req, res) => {
  const { id } = req.params
  const { projection } = req // as its a single restaurant, we don't need limit nor skipResults

  db.collection('restaurants')
    .find({_id: ObjectId(id)}, projection)
    .toArray((err, restaurant) => { res.json(restaurant) })
}
