var fs = require('fs')
var http = require('http')

var port = process.argv[2]
var filename = process.argv[3]

var server = http.createServer(function(request, response) {
    response.writeHead(200, {'content-type': 'text/plain'})
    fs.createReadStream(filename).pipe(response)
})

server.listen(Number(port))
