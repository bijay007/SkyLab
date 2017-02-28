module.exports = (db, not, req, res) => {
  const { cuisine } = req.params
  const {limit, skipResults, projection} = req

  const filter = not ? {$ne: {cuisine}} : {cuisine}

  // let filter = {cuisine}
  // if (not) {
  //   filter = {cuisine: {$ne: {cuisine}}}
  // }

  db.collection('restaurants')
  .find({filter}, projection)
  .limit(limit)
  .skip(skipResults)
  .toArray((err, aCuisine) => { res.json(aCuisine) })
}
