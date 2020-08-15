//Establish socket Connection
var socket = io.connect('http://192.168.0.41:3005');

//Receiving data from back-end
socket.on('server_data', function(msg){
  console.log(msg);
});
