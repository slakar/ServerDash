/** Functions to call on page load */
setNavColour();

/** Set colour of buttons in left side nav */
function setNavColour(){
  var _btn_temp = "nav-";
  if(document.body.contains(document.getElementById("nav-" + _page))){
    document.getElementById("nav-" + _page).style.backgroundColor = "#bf2424";
  }
}
