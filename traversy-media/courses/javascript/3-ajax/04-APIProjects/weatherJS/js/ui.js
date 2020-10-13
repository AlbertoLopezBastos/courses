class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.description = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }

  // Paint everything
  paint(weather) {
    console.log(weather);
    this.location.textContent = weather.name;
    this.description.textContent = weather.weather[0].description;
    this.string.textContent = weather.main.temp;
    this.icon.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.humidity.textContent = `Humedad: ${weather.main.humidity}%`;
    this.feelsLike.textContent = `Sensacion Termica: ${weather.main.feels_like}`;
    this.dewpoint.textContent = `Presion: ${weather.main.pressure}`;
    this.wind.textContent = `Viento: ${weather.wind.speed} km/h`;
  }
}
