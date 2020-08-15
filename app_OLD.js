const si = require('systeminformation');
const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', client => {
  console.log("Connection established" + client);

  client.on('event', data => { /* … */ });
  client.on('disconnect', () => { /* … */ });
});

server.listen(3000);

const test_cpu = si.cpu();

const getServerData = async() => {

  //Promise seems to be an array - Push to array firstly?
  const jsonData = await Promise.all([
    test_cpu,
    si.mem(),
    si.currentLoad()
  ]);

  return jsonData;
}

getServerData().then((data) => {
  var _cpu = data[0];
  var _mem = data[1];
  var _load = data[2];

  let jsonObj = {_cpu, _mem, _load};

  console.log(jsonObj);
});
