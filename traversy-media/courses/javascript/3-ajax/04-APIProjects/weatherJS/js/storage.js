class Storage {
  constructor() {
    this.city;
    this.state;
    this.defaultCity = 'Moron';
    this.defaultstate = 'bsas';
  }

  //Get Storage
  getLocationData() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    if (localStorage.getItem('state') === null) {
      this.state = this.defaultstate;
    } else {
      this.state = localStorage.getItem('state');
    }

    return {
      city: this.city,
      state: this.state
    };
  }

  //Set Storage
  setLocationData(city, state) {
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
  }
}
