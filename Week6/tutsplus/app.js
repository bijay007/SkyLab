var express = require('express')
var app = express()
var hbs = require('hbs')
var blogFile = require('./blog')

app.set('view engine', 'html')
app.engine('html', hbs.__express)
// app.use(express.bodyParser());

// if you change html files extension to .hbs, you can just do app.set('view engine', 'hbs')

// app.get('/', (req, res) => res.render('./views/index.html'))
// app.get('/about', (req, res) => res.render('./views/about.html'))
// app.get('/article', (req, res) => res.render('./views/article.html'))

app.get('/', (req, res) => res.render('index', {title: 'My blogs', entries: blogFile.getBlogEntries()}))
app.get('/about', (req, res) => res.render('about'))
app.get('/article', (req, res) => res.render('article'))
app.get('/article/:id', (req, res) => {
  var entry = blogFile.getSingleBlog(req.params.id) // read the url params and pass the id to function
  res.render('article', {title: entry.title, blog: entry}) // render the response to html
})

app.listen(3001)
