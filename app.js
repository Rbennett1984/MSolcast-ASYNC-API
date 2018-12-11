//geolocation w DarkSky weather API 
function weather() {

  var location = document.getElementById("location");
  var apiKey = '6b419ea4e9378d0f8f98d7419154be75'; //DarkSky Key
  var url = 'https://api.forecast.io/forecast/';

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    location.innerHTML = 'Latitude is ' + latitude + '° <br> Longitude is ' + longitude + '°';

     $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
      $('#temp').html(data.currently.temperature + '° F');
      $('#minutely').html(data.minutely.summary);

    if (position.coords.latitude > 37) {
        latitudeFeedback.innerHTML = ("Expose Your Skin Around Midday for at least 15 minutes.")
    }
      else if (position.coords.latitude < 37) { 
        latitudeFeedback.innerHTML = ("Your are close enough to the equator that you can get your regular dose of <br> sunshine with regular sun exposure.")
      }
      else {
        latitudeFeedback.innerHTML = ("Are you still on Earth?")
      }

      //if/else for tempfeedback
  if (data.currently.temperature < 80 ) {
    tempFeedback.innerHTML = ("It seems it's mild enough to go outside. ENJOY!")
  }

    else if (data.currently.temperature > 80) { 
    tempFeedback.innerHTML = ("The weather is a bit too hot and you may experience negative <br> symptoms if you are spending more than a few minutes outside")
  }

    else {
    tempFeedback.innerHTML = ("The weather may not be suitable for outdoor activities")

  };
  
  
    });
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }

  location.innerHTML = "Locating...";
}

weather();

