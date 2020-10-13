//Lexical Binding

const user = {
  name: 'Tyler',
  age: 27,
  languages: ['JavaScript', 'Ruby', 'Python'],
  greet() {
    const hello = `Hello, my name is ${this.name} and I know`;

    const langs = this.languages.reduce(function(str, lang, i) {
      // this aca no es user, es el this de esta funcion, entonces esto pincha.
      if (i === this.languages.length - 1) {
        return `${str} and ${lang}.`;
      }

      return `${str} ${lang},`;
    }, '');

    alert(hello + langs);
  }
};

const user = {
  name: 'Tyler',
  age: 27,
  languages: ['JavaScript', 'Ruby', 'Python'],
  greet() {
    const hello = `Hello, my name is ${this.name} and I know`;
    // solucion 1: pasarle el .bind(this) para transformar el this de la funcion
    const langs = this.languages.reduce(
      function(str, lang, i) {
        if (i === this.languages.length - 1) {
          return `${str} and ${lang}.`;
        }

        return `${str} ${lang},`;
      }.bind(this),
      ''
    );

    alert(hello + langs);
  }
};

const user = {
  name: 'Tyler',
  age: 27,
  languages: ['JavaScript', 'Ruby', 'Python'],
  greet() {
    const hello = `Hello, my name is ${this.name} and I know`;
    // solucion 2: usar arrow function dado que no tiene in this propio y usa el de arriba.
    const langs = this.languages.reduce((str, lang, i) => {
      if (i === this.languages.length - 1) {
        return `${str} and ${lang}.`;
      }

      return `${str} ${lang},`;
    }, '');

    alert(hello + langs);
  }
};
