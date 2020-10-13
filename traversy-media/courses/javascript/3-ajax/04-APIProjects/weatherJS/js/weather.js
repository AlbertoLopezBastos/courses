class Weather {
  constructor(city, state) {
    this.apiKey = '26efa4c02c0afd78d048cb26ff1c2cf2';
    this.city = city;
    this.state = state;
  }

  // Fetch Weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}&units=metric&lang=es`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
