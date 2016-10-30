var fs = require('fs')

var file = fs.readFileSync(process.argv[2])
var contents = file.toString()

console.log(contents.split('\n').length - 1)
