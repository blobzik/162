const express = require('express');
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:8080"
    }
});

app.get('/', async (req, res) => {
    return res.send(123);
});

app.listen(3000, async () => {
    console.log('Server started');
});


io.on("connection", (socket) => {
    socket.emit('connected', {
        message: 'You connected successfully!'
    });

    socket.on('message', (arg) => {
        console.log(arg);
    });

    socket.on('disconnect', (reason) => {
        console.log('Client disconnected!')
        console.log(reason);
    })
});

httpServer.listen(3001);
