var fs = require('fs')

fs.createReadStream(process.stdin.pipe(process.stdout))
