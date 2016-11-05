var ws = require('websocket-stream')

var stream = ws('ws://192.168.33.10:8099')
// var stream = ws('ws://localhost:8099')
// the solution uses localhost, but I used a different address
// to work with my Vagrant VM.
stream.write('hello\n')
