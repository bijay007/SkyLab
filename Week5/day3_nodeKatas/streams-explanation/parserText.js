var fs = require('fs')
var through2 = require('through2')
var split2 = require('split2')

var censorship = through2( function (chunk, _, next) {
  var piece = chunk.toString()
  var censoredPiece = piece.replace(/fuck|goddamn|bullshit|crappy/g, "****")
  this.push(censoredPiece + '\n')
  next()
})

var logStream = through2( function (chunk, _, next) {
  console.log(chunk.toString())
  this.push(chunk.toString())
  next()
})

var outputStream = fs.createWriteStream('censored.txt')

outputStream.on('finish', function() {
  console.log("censored.txt writing finished!!")
})

fs.createReadStream('pulp-fiction.txt', 'utf-8')
    .pipe( split2() )
    .pipe( censorship )
    .pipe( logStream )
    .pipe( outputStream )