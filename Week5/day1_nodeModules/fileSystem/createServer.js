var http = require('http')
// createServer create an object instance which we asssign to a variable (here server)
var server = http.createServer()
// now this new object has access to new methods (on, listen etc) and event handlers
server.on('request', function (req, res) {
// to the 'on' event, 2 objects are passed - req and res
// req is stuff asked by user. it's the change in url /ajax calls etc
  res.end('This is my response, bitch')
// end sends the reponse and ends communication
})
server.listen(3000)
