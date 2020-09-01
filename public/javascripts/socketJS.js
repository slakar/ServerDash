//Establish socket Connection
var socket = io.connect('http://localhost:3005');

//Emit message on initial connection
socket.on('connect', function(msg){

  //Identify connection to server
  socket.emit('User', {
    page: _page
  });
});

//Receiving server data from back-end
socket.on('server_data', function(msg){
  prepareEnv(msg);
});

//Redirect user to overview page
socket.on('redirect', function(msg){
  var _loc = "/" + msg.location;
  window.location.href = _loc;
});
