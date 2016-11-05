var trumpet = require('trumpet'),
    through = require('through2')

var tr = trumpet()
process.stdin.pipe(tr).pipe(process.stdout)

var stream = tr.select('.loud').createStream()

stream.pipe(through(function (buffer) {
    this.queue(buffer.toString().toUpperCase())
})).pipe(stream)
