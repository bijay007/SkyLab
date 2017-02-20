/*
 when you do --save, it saves the dependencies in package.json file (bower.json earlier)
Now you can delete the node modules folder(bower_componenets) while uploading in git repos so
it takes less space */

const express = require('express')
const app = express() // factory function that returns an object

const {PORT, API_KEY} = process.env // add as environment variables on unix environment

app.get('/', (req, res) => res.send('PAGE 1 - Hello world')) // no need to do createServer(), .on() etc
app.get('/contacts', (req, res) => res.send('PAGE 2 - No contacts added yet'))

console.log(`Your API key is ${API_KEY}`)
app.listen(3001, () => console.log(`Listening on ${PORT}..`))

// to create server from CLI instead of browser, you can use CURL
// eg. curl localhost:3001 -> Hello world!
// with just npm start you can launch this file as the process.env is added in scripts in package.json
// I also have put npm prestart: npm install which install all npm modules if they don't exist (use && if you need to preinstall more stuffs)
