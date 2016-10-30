var http = require('http')

var results = []
for(var i=2; i<process.argv.length; i++)
    results[i-2] = null
var resultCount=0

function printResults() {
    for(var i=0; i<results.length; i++)
        console.log(results[i])
}

function httpGet(url, index) {
    http.get(url, function(response) {
        var result = ''
        response.setEncoding('utf8')
        response.on('data', function(data) {
            result += data
        })
        response.on('end', function() {
            results[index] = result
            resultCount++
            if(resultCount == process.argv.length-2)
                printResults()
        })
        response.on('error', console.error)
    }).on('error', console.error)
}

for(var i=2; i<process.argv.length; i++) {
    httpGet(process.argv[i], i-2)
}
