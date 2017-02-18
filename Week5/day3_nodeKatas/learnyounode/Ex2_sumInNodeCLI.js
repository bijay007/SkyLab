const args = process.argv
var sum = 0
for (let i = 2; i < args.length; i++) {
  sum += parseInt(args[i])
}
console.log(sum)

// Better way => console.log(process.argv.slice(2).reduce((acc, elem) => acc + parseInt(elem), 0)) )
