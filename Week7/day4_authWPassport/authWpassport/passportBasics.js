const passport = require('passport')
const LocalStrategy = require('passport-local').LocalStrategy

const session = require('express-session')
const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(session({secret: 'holyshitmostsecretpasswordeverbitch'}))

app.use(passport.initialize())  // arrancamos passport
app.use(passport.session()) // arrancamos session con passport
