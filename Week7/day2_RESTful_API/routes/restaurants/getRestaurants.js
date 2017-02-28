module.exports = (db, req, res) => {
  const { limit, skipResults, projection } = req // comes from middleware getFilterparams

  db.collection('restaurants')
    .find({}, projection)
    .limit(limit)
    .skip(skipResults)
    .toArray((err, aRestaurants) => { res.json(aRestaurants) })
}

// if you don't pass - default (limit=0, skipresults=0)
// if u pass /restaurants
// limit=30, skipresults=1
