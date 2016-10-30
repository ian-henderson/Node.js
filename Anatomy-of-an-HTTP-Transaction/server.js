var http = require('http')
var port = process.argv[2]


var server = http.createServer(function(request, response) {

    // Variables
    var method = request.method,
        url = request.url,
        headers = request.headers,
        userAgent = headers['user-agent'],
        body = [];

    // Request Handling
    request.on('data', function(chunk) {
        body.push(chunk)
    })
    request.on('end', function() {
        body = Buffer.concat(body).toString()

        // Response Handling
        response.on('error', console.error)
        response.statusCode = 200
        response.setHeader('Content-Type', 'application/json')
        // Note: the two lines above could be replaced with
        // response.writeAhead(200, {'Content-Type': 'application/json'})
        var responseBody = {
            headers: headers,
            method: method,
            url: url,
            body: body
        }
        response.write(JSON.stringify(responseBody))
        response.end()
        // Note: the last two lines could be replaced with
        // response.end(JSON.stringify(responseBody))

    })
    request.on('error', console.error)

}).on('error', console.error)


server.listen(Number(port))
