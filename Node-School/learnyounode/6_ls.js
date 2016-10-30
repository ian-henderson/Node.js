var ls = require('./6_module.js')
var directory = process.argv[2]
var extension = process.argv[3]

ls(directory, extension, function(err, list) {
    if(err) console.error(err)
    list.forEach(function(file) {
        console.log(file)
    })
})
