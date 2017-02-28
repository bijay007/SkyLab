module.exports = (db, req, res) => {
  const { borough } = req.params
  const { limit, skipResults, projection } = req

  db.collection('restaurants')
    .find({ borough }, projection)
    .limit(limit)
    .skip(skipResults)
    .toArray((err, aRestaurants) => { res.json(aRestaurants) })
}
