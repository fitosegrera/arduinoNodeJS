var express = require('express')
var app = express()
var io = require('socket.io');
var serv_io = io.listen(3300);
var fs = require('fs')

//Set the ap to serve static files in the folder /public
app.use('/', express.static(__dirname + '/public'))

//Handle all WEBsocket events
app.get('/commands', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
    serv_io.on('connection', function(socket) {
        console.log("socket sending data...")
        socket.emit('connected', {
            status: 'OK'
        })
        socket.on('coms', function(data) {
            console.log(data);
        })
    })
})

//Listen on port 3000
app.listen(3000, function() {
    console.log("Server running on port 3000")
})
