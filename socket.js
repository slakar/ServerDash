const io = require('socket.io')();
const si = require('systeminformation');

io.on('connection', onSocketConnection);

io.listen(3005);

/** Event listener for Socket server "Connection" event. */
function onSocketConnection(socket) {
  console.log("Connection from Client.");
}
