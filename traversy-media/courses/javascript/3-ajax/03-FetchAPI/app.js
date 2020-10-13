document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// ----------------------  Forma Antigua  -------------------------------

// function getText() {
//   fetch('test.txt')
//     .then(function(response) {
//       return response.text();
//     })
//     .then(function(data) {
//       document.getElementById('output').innerHTML = data;
//     })
//     .catch(function(error) {
//       console.log('hay un error', error);
//     });
// }

// function getJson() {
//   fetch('test.json')
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       let output = '';
//       data.forEach(function(test) {
//         output += `<li>${test.title} / ${test.body}</li>`;
//       });
//       document.getElementById('output').innerHTML = output;
//     })
//     .catch(function(error) {
//       console.log('hay un error', error);
//     });
// }

// function getExternal() {
//   fetch('https://api.github.com/users')
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       let output = '';
//       data.forEach(function(user) {
//         output += `<li>${user.login} / ${user.id}</li>`;
//       });
//       document.getElementById('output').innerHTML = output;
//     })
//     .catch(function(error) {
//       console.log('hay un error', error);
//     });
// }

// ----------------------  Forma Nueva  -------------------------------

function getText() {
  fetch('test.txt')
    .then(response => response.text())
    .then(data => (document.getElementById('output').innerHTML = data))
    .catch(error => console.error('Hay un error', error));
}

function getJson() {
  fetch('test.json')
    .then(response => response.json())
    .then(data => {
      let output = '';
      data.forEach(user => (output += `<li>${user.title} - ${user.body}</li>`));
      document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.error('Hay un error', error));
}

function getExternal() {
  fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
      let output = '';
      data.forEach(user => (output += `<li>${user.login} - ${user.id}</li>`));
      document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.error('Hay un error', error));
}

//------------------- Arrow Functions Video Examples ------------------------

// Forma normal
// const sayHello = function() {
//   console.log('Hello');
// };
// sayHello();

// Con arrow function
// const sayHello = () => {
//   console.log('Hello');
// };
// sayHello();

// Si es una sola linea no necesita corchetes
//const sayHello = () => console.log('Hello');
//sayHello();

// Con un return que logueas afuera
// const sayHello = () => 'Hello';
// console.log(sayHello());

// Devolver objeto
// const sayHello = () => ({ msg: 'Hello' });
// console.log(sayHello());

// Un solo parametro (name) no necesita parentesis
// const sayHello = name => console.log(`Hello ${name}`);
// sayHello('Beto');

// Mas de un parametro si necesita parentesis
// const sayHello = (firstName, lastName) =>
//   console.log(`Hello ${firstName} ${lastName}`);
// sayHello('Beto', 'Lopez');

// Ejemplos con arrays
//const users = ['Beto', 'Kiwi', 'Peper'];

// Normal
// const nameLengths = users.map(function(name) {
//   return name.length;
// });
// console.log(nameLengths);

// Corto
// const nameLengths = users.map((name) => {
//   return name.length;
// });
// console.log(nameLengths);

// Mas Corto
// const nameLengths = users.map(name => name.length);
// console.log(nameLengths);
