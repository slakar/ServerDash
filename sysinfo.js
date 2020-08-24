const si = require('systeminformation');

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

exports.getData = getData;
