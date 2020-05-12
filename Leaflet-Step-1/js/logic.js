var map = L.map("mapid", {
    center: [40.7128, -74.0059],
    zoom: 11
  });

//tilelayer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: "pk.eyJ1IjoiamVuaWVuIiwiYSI6ImNrYTRpdmlmNzA4b24zZ25zYmVodGtqeHcifQ.jijhxYk4H9mLaQJRaRSQ6A"
}).addTo(map);

//backup url 
//colors


url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"
d3.json(url, function(data) {
//colors
  function chooseColor(magnitude) {
    switch (true) {
    case magnitude > 5:
      return "red";
    case magnitude > 4:
      return "darkorange";
    case magnitude > 3:
      return "orange";
    case magnitude > 2:
      return "khaki";
    case magnitude > 1:
      return "lightyellow";
    default:
      return "greenyellow";
    }
  }
  
  });