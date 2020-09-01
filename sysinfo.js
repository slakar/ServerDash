const si = require('systeminformation');
const cp = require('child_process');

const exec_options = {
  cwd: null,
  env: null,
  encoding: 'utf8',
  timeout: 0,
  maxBuffer: 200 * 1024,
  killSignal: 'SIGTERM'
};

const sysComponents = {
  cpu: si.cpu(),
  mem: si.mem(),
  load: si.currentLoad()
};

/** Function to retrieve data */
async function getData(_req){
  var _reqPayload = [];
  var stats = {};

  _req.forEach((item, i) => {
    _reqPayload.push(sysComponents[item]);
  });

  //Validate to ensure data length is equal to requested amount - we are using the length of the request data BADDD
  const jsonData = await Promise.all(_reqPayload)
    .then((data) => {
      _req.forEach((item, i) => {
        stats["_" + item] = data[i]
      });

      return stats;
    })
    .catch((error) => {
      console.error(error);
    });

  return jsonData;
}

/** TEST - Processes */
cp.exec('pm2 jlist', exec_options, (err, stdout, stderr) => {
  var jsonObj = JSON.parse(stdout);

  console.log(jsonObj);
});

exports.getData = getData;
