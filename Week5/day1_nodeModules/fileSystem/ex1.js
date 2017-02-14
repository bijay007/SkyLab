/* Write a node.JS program that execute a connection to server and return success message like "Success, i'm listening from port: 3000"
Set the port of the connection using an environment variable PORT */

var httpService = require('http')
var newServer = httpService.createServer()
var PORT = process.env.PORT || 3000
// process.argv[2]

newServer.on('request', function (req, res) {
  res.end('Success, I\'m listening from port: ')
}).listen(PORT)
