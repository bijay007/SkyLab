const express = require('express')
const app = express()

app.use(express.static('public')) // any static pages other than root url, it searches in folder named public (index.html file usually)
// I define resource url/folder and any changes to it, I do by using the 4 methods (get,post,put,delete)
// so I don't need to create stuffs like getstuffs, deletestuff folder for every element/client

// PUBLIC FOLDER BASED (example above)
// RESOURCE BASED
// npm run watch

// direct typing on url - get - curl localhost:3001/clients (clients is the enpoint)
// otherwise normally you can create a form with method set to post - curl -X "POST" localhost:3001/clients

// I create a folder called view with pseudo html file (.pug) containing elements to be rendered dynamically by js file
