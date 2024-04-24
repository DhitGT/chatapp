const http = require('http');
const { Server } = require('socket.io');

const httpServer = http.createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('pesan_dari_client', (msg) => {
    io.emit('pesan_dari_client', msg);
    console.log(msg)
  });
});

httpServer.listen(3111, () => {
  console.log('Socket.io server listening on *:3111');
});
