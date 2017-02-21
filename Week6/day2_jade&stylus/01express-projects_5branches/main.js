const express = require('express')
const posts = require('./posts.json')
const app = express()

const { PORT } = process.env

app.use( express.static('public') )

app.get('/posts', (req,res) => {
  res.json(posts)
})

app.get('/post/:id', (req,res) => {
  console.log( req.params.id )
})

app.listen( PORT, () => console.log(`Listening on ${PORT}...`) )