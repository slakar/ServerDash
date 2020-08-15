const io = require('socket.io')();
const si = require('systeminformation');

io.on('connection', onSocketConnection);

io.listen(3005);

/** Event listener for Socket server "Connection" event. */
function onSocketConnection(socket) {
  console.log("Connection from Client.");

  // This will emit the event to all connected sockets
  getServerData()
    .then((data) => {
      io.emit('server_data', {
        server_data: data
      });
    });
}

/** Data points */
const test_cpu = si.cpu();

/** Function to retrieve data */
const getServerData = async() => {

  //Promise seems to be an array - Push to array firstly?
  const jsonData = await Promise.all([
    test_cpu,
    si.mem(),
    si.currentLoad()
  ]).then((data) => {
    var _cpu = data[0];
    var _mem = data[1];
    var _load = data[2];

    let jsonObj = {_cpu, _mem, _load};

    //console.log(jsonObj);
    return jsonObj;
  })
  .catch((error) => {
    console.error(error);
  });

  return jsonData;
}

/** Collect and format data */
//getServerData().then((data) => {console.log(data);});
