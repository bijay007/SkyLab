const express = require('express')
const app = express()

const functionList = require('./routes/operations.js')
const bodyparser = require('body-parser')

app.set('view engine', 'pug')
app.use('/public', express.static('public'))

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

const urlRouter = express.Router()
app.use('/', urlRouter)

urlRouter.get('/', functionList.showList)
urlRouter.post('/', functionList.createlist)
urlRouter.get('/delete/:id', functionList.deletelist)
urlRouter.get('/update/:id', functionList.updatelist)

app.listen(3000, () => console.log('listening to PORT 3000...'))

