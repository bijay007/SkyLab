/* Write a node.JS program that read and shows in the console the html code of one external page. The link of the external page should be read from a file link.txt
Hint: You need npm module -> request */
var req = require('request')
var fs = require('fs')

fs
  .readFile('linktohtml.txt', 'utf-8', function (error, data) {
    if (error) throw error
    req(data, function (error, response, body) { // asynchronous way
      if (!error && response.statusCode === 200) {
        console.log(body)
      }
    })
  })

/* synchronous way
var link = fs.readFileSync('linktohtml.txt', 'utf-8')
req(link,....) */
