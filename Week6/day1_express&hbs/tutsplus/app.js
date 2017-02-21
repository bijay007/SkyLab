var express = require('express')
var app = express()
app.set('view engine', 'pug')
var blogFile = require('./blog')

app.set('view engine', 'pug')

// app.get('/', (req, res) => res.render('./views/index.html'))
// app.get('/about', (req, res) => res.render('./views/about.html'))
// app.get('/article', (req, res) => res.render('./views/article.html'))

app.get('/', (req, res) => res.render('index', {mainTitle: 'All My blogs', allBlogs: blogFile.allBlogsEntries()}))
app.get('/about', (req, res) => res.render('about'))
app.get('/article', (req, res) => res.render('article'))
// app.get('/article/:id', (req, res) => {
//   var entry = blogFile.singleBlogEntry(req.params.id) // read the url params & pass the id to function
//   res.render('article', {title: entry.title, blog: entry}) // render the response to html
// })

app.listen(3001)
