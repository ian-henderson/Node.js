var http = require('http')

http.createServer(function(request, response) {
    // Bad Request Error
    request.on('error', function(error) {
        console.error(error)
        response.statusCode = 400
        response.end()
    })
    response.on('error', console.error)

    // Request Handling
    if (request.method === 'GET' && request.url === '/echo') {
        request.pipe(response)
    } else {
        response.statusCode = 404
        response.end()
    }
}).listen(Number(process.argv[2]))
