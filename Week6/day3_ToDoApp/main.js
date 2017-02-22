const express = require('express')
const app = express()

const functionList = require('./routes/operations.js')
const bodyparser = require('body-parser')
const urlRouter = express.Router()

app.set('view engine', 'pug')
app.use('/views', express.static('views'))
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use('/', urlRouter)

urlRouter.get('/', functionList.mainPage)
// urlRouter.get('/todo', operations.showList)
// urlRouter.post('/todo', operations.createlist)
// urlRouter.delete('/todo', operations.deletelist)
// urlRouter.update('/todo', operations.updatelist)

app.listen(3000, () => console.log('listening to PORT 3000...'))

