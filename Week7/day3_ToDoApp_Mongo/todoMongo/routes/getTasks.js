module.exports = (db, req, res) => {
  // const { limit, skipResults, projection } = req
  db.collection('todolist')
    .find()
    // .limit(limit)
    // .skipResults(skipResults)
    .toArray((err, tasklist) => { res.json(tasklist) })
}
