module.exports = (db, req, res) => {
  const taskName = req.body
  db.collection('todolist')
    .insert({
      // id: this.find().toArray().length + 1,
      body: taskName,
      creationDate: Date.now(),
      completionDate: ''
    })
    .then(list => res.status(200).json(list))
    .catch(err => res.status(500).json(err))
}
