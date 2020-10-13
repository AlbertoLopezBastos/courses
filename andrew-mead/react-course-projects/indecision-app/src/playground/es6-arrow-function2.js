// arguments object - no longer bound with arrow functions

const add = function (a, b) {
  //console.log(arguments);
  return a + b;
};

//console.log(add(25, 1, 500));

const add2 = (a, b) => {
  //console.log(arguments); no longer exists arguments
  return a + b;
};

//console.log(add2(25, 1, 500));

// this keyword - no longer bound

const user = {
  name: 'Beto',
  cities: ['Moron', 'Mar de Ajo'],
  printPlacesLived: function () {
    const that = this;
    this.cities.forEach(function (city) {
      console.log(that.name + ' vivio en ' + city);
    });
  },
};

user.printPlacesLived();

const user2 = {
  name: 'Beto',
  cities: ['Moron', 'Mar de Ajo'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' Has lived in ' + city);
  },
};
console.log(user2.printPlacesLived());

const multiplier = {
  numbers: [2, 5, 3, 4, 6, 7],
  multiplyBy: 10,
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
