const express = require('express')
const stylus = require('stylus')
const nib = require('nib')

const app = express()
function compile (str, path) {
  return stylus(str)
    .set('style.styl', '/stylesheets')
    .use(nib())
}

app.set('view engine', 'pug')

app.use(stylus.middleware({src: __dirname + '/public', compile}))
app.use(express.static(__dirname + 'public'))

app.get('/', (req, res) => {
  const title = 'My Website'
  res.render('index', {title})
})

app.listen(3001, () => console.log('listening on PORT 3001...'))
