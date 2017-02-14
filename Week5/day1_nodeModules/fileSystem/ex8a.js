/* Write a node program that read the page https://nodejs.org/api/all.html and writes in a file
 (and shows it content after reading it) the internal links that contain some text passed as a parameter.

$ node getLinksNode.js createServer
The file was saved!
https://nodejs.org/api/all.html#http_http_createserver_requestlistener
https://nodejs.org/api/all.html#https_https_createserver_options_requestlistener
https://nodejs.org/api/all.html#net_net_createserver_options_connectionlistener
https://nodejs.org/api/all.html#tls_tls_createserver_options_secureconnectionlistener

$ node getLinksNode.js readFile
The file was saved!
https://nodejs.org/api/all.html#fs_fs_readfile_file_options_callback
https://nodejs.org/api/all.html#fs_fs_readfilesync_file_options */

var fs = require('fs')
var req = require('request')

fs.readFile('linkParse.txt', 'utf-8', (error, data) => {
  if (error) throw error
  req(data, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(body.match(/^"https.*$"/))
    }
  })
})
