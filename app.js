const si = require('systeminformation');

// promises style - new since version 3
si.currentLoad().then(data => console.log(data));

si.cpuTemperature()
    .then(data => console.log(data))
    .catch(error => console.error(error));

//Mem
si.mem()
  .then(data => console.log(data))
  .catch(error => console.error(error));
