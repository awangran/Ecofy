$.get("https://ipinfo.io/181.235.82.3/json?token=45045d6fba64ad", function(response) {
  if (!response) {
    console.log("Fetch Failed")
  }
  var ip = document.getElementById("ip");
  var greet = document.getElementById("greeting");
  var weather = document.getElementById("question");
  ip.innerHTML = response.ip
  weather.innerHTML = response.country + ", " + response.city + ", " + response.region
  

  

  
  $.get(`https://fourtonfish.com/hellosalut/?ip=${response.ip}`, function(response) {
    greet.innerHTML = response.hello
  }, "json")

}, "json")

