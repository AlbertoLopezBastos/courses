function AnimatedHover() {
  document.querySelectorAll("li").forEach(function(li) {
    li.addEventListener("mouseover", function(event) {
      li.style = "background: #ddd";

      if (li.nextElementSibling) {
        li.nextElementSibling.style = "background: #eee";

        // if (li.nextElementSibling.nextElementSibling) {
        //   li.nextElementSibling.nextElementSibling.style = "background: #eee";
        // }
      }
      if (li.previousElementSibling) {
        li.previousElementSibling.style = "background: #eee";

        // if (li.previousElementSibling.previousElementSibling) {
        //   li.previousElementSibling.previousElementSibling.style =
        //     "background: #eee";
        // }
      }
    });

    li.addEventListener("mouseout", function(event) {
      li.style = "background: #fff";
      if (li.nextElementSibling) {
        li.nextElementSibling.style = "background: #fff";

        // if (li.nextElementSibling.nextElementSibling)
        //   li.nextElementSibling.nextElementSibling.style = "background: #fff";
      }
      if (li.previousElementSibling) {
        li.previousElementSibling.style = "background: #fff";

        // if (li.previousElementSibling.previousElementSibling)
        //   li.previousElementSibling.previousElementSibling.style =
        //     "background: #fff";
      }
    });
  });
}

AnimatedHover();

// const body = document.querySelector("body");
// const ul = document.querySelector("ul");
// ul.addEventListener("mousemove", changeBackground);

// function changeBackground(e) {
//   console.log(`${e.offsetX},${e.offsetY}`);
//   body.style.background = `rgb(${e.offsetX},${e.offsetY},40)`;
// }

document.querySelector("html").addEventListener("click", show);

// document.querySelector("body").addEventListener("click", function() {
//   console.log("body");
// });

// document.querySelector("html").addEventListener("click", function() {
//   console.log("html");
// });

function show(e) {
  if (e.target.className === "list-text") {
    console.log("p");
  } else if (e.target.className === "list-item") {
    console.log("li");
  } else {
    console.log(e.target);
  }
}

//------------------------- calcular la edad de un tipo ----------------

function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const brad = new Person("Brad", "10-9-1986");
console.log(brad.calculateAge());

// ---------------------------------------------------------------------

const getsum = new Function("x", "y", "return x + y");

console.log(getsum(1, 3));

// -------- IMPORTANTE ! heredar en javascript ES5 de una clase a otra clase y heredar su prototipo

// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person("John", "Doe");

console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer("Tom", "Smith", "555-555-5555", "Standard");

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
};

console.log(customer1.greeting());

// -------- MASSSSS IMPORTANTE ! heredar en javascript ES6 de una clase a otra clase y heredar su prototipo

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer("John", "Doe", "555-555-5555", "Standard");

console.log(john.greeting());

console.log(Customer.getMembershipCost());
