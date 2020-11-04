"use strict";

const http = require('http');
const app = require('./app');
const port = process.env.PORT || 8080;
const ip = "0.0.0.0";
const server = http.createServer(app);

server.on('connection', function (socket) {
  console.log(socket.remoteAddress);
  // Put your logic for what to do next based on that remote address here
});

server.listen(port, () => {
  console.log('Server running on port: ' + port);
});
