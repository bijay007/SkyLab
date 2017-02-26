const todoList = []
const addTodo = (newitem) => {
  return {
    desc: newitem,
    date: new Date().toString(),
    state: 'Yet to be completed',
    id: todoList.indexof(newitem)
  }
}

module.exports = {
  showList: (req, res) => {
    res.render('layout', {heading: 'ToDo App made with Express and Pug'}, {todoList})
  },
  createlist: (req, res) => {
    let newTodo = req.body.myTodo
    newTodo.length > 0 ? todoList.push(addTodo(newTodo)) : res.redirect('/')
    res.redirect('/')
  },
  deletelist: (req, res) => {
    let idToDelete = req.params.id
    todoList.splice(todoList.indexof(todoList.find((item) => item.id === idToDelete)), 1)
    res.redirect('/')
  },
  updatelist: (req, res) => {
    let idToUpdate = req.params.id
    todoList.splice(todoList.indexof(todoList.find((item) => item.id === idToUpdate)), 1)
    res.redirect('/')
  }
}
