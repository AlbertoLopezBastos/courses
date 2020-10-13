// Init Store class
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init Weather class
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Init UI class
const ui = new UI();

// Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location Event
document.getElementById('w-change-btn').addEventListener('click', e => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change Location
  weather.changeLocation(city, state);

  // Set location in LS
  storage.setLocationData(city, state);

  // Get Weather Again
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});

function getWeather() {
  weather
    .getWeather()
    .then(results => ui.paint(results))
    .catch(err => console.log(err));
}
