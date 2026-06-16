// socket.io is Js library for realtime web applications. It enables real-time, bidirectional and event-based communication between the browser and the server. It consists of two parts: a client-side library that runs in the browser, and a server-side library for Node.js. Both components have an identical API. Socket.IO primarily uses the WebSocket protocol, but it also provides fallback options for older browsers that do not support WebSockets.


const express = require('express');
const app = express();
const http = require('http');
const path = require('path');

const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function (socket) {
    socket.on('sendLocation', function (data) {
        io.emit("recieve-location", {id: socket.id, ...data});
    });
    
    socket.on('disconnect', function () {
        io.emit("disconnect", socket.id);
    });
});

app.get("/", function (req, res) {
    res.render("index");
});

server.listen(3000);