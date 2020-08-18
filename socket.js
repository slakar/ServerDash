const io = require('socket.io')();
const sysinfo = require('./sysinfo');

io.on('connection', (socket) => {
  console.log("User connected.");

  socket.on('Data_Request', (payload) => {
    console.log("User requested: " + payload.req);

    // This will emit the event to all connected sockets
    sysinfo.getData(["cpu", "mem", "load"])
      .then((data) => {
        io.emit('server_data', {
          server_data: data,
          sec: payload.sec
        });
      })
      .catch((error) => {
        console.error(error);
      });
})

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

io.listen(3005);

/*
sysinfo.getData(["cpu", "mem", "load"])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })
*/
