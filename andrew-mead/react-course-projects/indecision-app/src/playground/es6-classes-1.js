class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi. I'm ${this.name}! `;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, title) {
    super(name, age);
    this.title = title;
  }

  hasTitle() {
    return !!this.title;
  }

  getDescription() {
    let description = super.getDescription();

    this.hasTitle() && (description += ` ${this.title}`);

    return description;
  }
}

class Traverler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let message = super.getGreeting();
    this.hasHomeLocation() &&
      (message += `I'm visiting from ${this.homeLocation}.`);
    return message;
  }
}

const me = new Person('Albert', 33);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person(undefined, 45);
console.log(other.getGreeting());
console.log(other.getDescription());

const my = new Student('Alberto', 33, 'Tecnico Superior');
console.log(my.hasTitle());
console.log(my.getDescription());

const Kiwi = new Traverler('Kiwi', 28, 'Moron');

console.log(Kiwi.getGreeting());
