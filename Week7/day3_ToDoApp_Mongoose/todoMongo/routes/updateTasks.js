module.exports = (db, req, res) => {
  const taskId = req.params
  
  db.collection('todolist')
  .update({
    _id: {$eq: ObjectId(taskId)},
    $set: {completionDate: Date.now()}}
  })
}
