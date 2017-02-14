var sum = require('./operations/sum') // we can get rid of .js (?)
var multi = require('./operations/multiplication.js')
var img = require('./node_modules/node-emoji/index.js')
// you can just do - require('node-emoji') in line 3
// var http = require('http') // think of it as preinstalled node package

console.log(' ' + img.emoji.tada + ' The Sum of 5 & 8 is.. ' + sum(5, 8) + img.emoji.tada)
console.log(' ' + img.emoji.tada + ' ..and their product is..' + multi(5, 8) + img.emoji.tada)
