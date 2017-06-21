const path = require('path');
const http = require('http');
const express = require('express')
const socketIO = require('socket.io');

var app = express();
var server = http.createServer(app);
const port = process.env.PORT || 3000;
var io = socketIO(server);
io.on('connection',(socket)=>{
    console.log('New User connected');

    socket.on('disconnect',()=>{
        console.log('Disconnected from client');
    });
})

const publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));



server.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
});