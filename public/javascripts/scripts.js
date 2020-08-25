/** Functions to call on every page load */
setNavColour();

/** Set colour of buttons in left side nav */
function setNavColour(){
  var _btn_temp = "nav-";
  if(document.body.contains(document.getElementById("nav-" + _page))){
    document.getElementById("nav-" + _page).style.backgroundColor = "#bf2424";
  }
}

/** Prepare graphs and the rest of the dashboard environment */
function prepareEnv(_payload){

  //Possibly look into validating data - making sure it isnt corrupt
  //Add a timer, display loading for a 3 seconds or so
  //Look into using async await here
  _section = "section-" + _payload.sec;
  console.log(_payload);

  //Load data - CPU
  cpu_load_data = {
    title: "Average Load",
    chartID: "avg_load-chart",
    values: [_payload.server_data._load.avgload, 100 - _payload.server_data._load.avgload],
    labels: ["Active", "Idle"]
  };

  mem_load_data = {
    title: "Memory Usage",
    chartID: "mem_usage-chart",
    values: [_payload.server_data._mem.active/1000000000, (_payload.server_data._mem.total - _payload.server_data._mem.active)/1000000000],
    labels: ["Used", "Free"]
  };

  initChart_load(cpu_load_data);
  initChart_load(mem_load_data);

  document.getElementById(_section).style.display = "block";
  document.getElementById('section-loading').style.display = "none";
}

//Keep charts up to Date
//setInterval(prepareEnv(), 10000);
