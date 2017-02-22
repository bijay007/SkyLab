// const todo = require('./todolist.json')

module.exports = {
  mainPage: (req, res) => {
    res.render('layout', {heading: 'ToDo App made with Express and Pug'})
  }
  // showList: (req, res) => {
  //   res.json(todo)
  // },
  // createlist: (req, res) => {
  //   res.send('item added')
  // },
  // deletelist: (req, res) => {
  //   res.send('item removed')
  // },
  // updatelist: (req, res) => {
  //   res.send('item completed')
  // }
}
