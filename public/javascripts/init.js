//Execute based on which page the user is on
console.log("Current page: " + _page);

switch(_page) {
  case "Overview":
    //Identify connection to server
    socket.emit('Data_Request', {
      req: "all",
      sec: "overview"
    });

    break;
  default:
    console.error("Page not identified!");
}
