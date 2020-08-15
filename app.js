const si = require('systeminformation');

const test_cpu = si.cpu();

const getServerData = async() => {

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
