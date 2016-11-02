var http = require('http'),
    through = require('through2')

var server = http.createServer(function (request, response) {
    if (request.method === 'POST') {
        request.pipe(through(function (buffer, _, next) {
            this.push(buffer.toString().toUpperCase())
            next()
        })).pipe(response)
    } else {
        response.end('send me a POST\n')
    }
}).on('error', console.error)

server.listen(process.argv[2])
