// // callback en foreach

// const ciudades = ['Londres', 'New York', 'Madrid', 'Paris', 'Viena'];

// // inline callback (funcion anonima)
// ciudades.forEach(function(ciudad) {
//   console.log(ciudad);

// });

// // con funcion definida
// function callback(ciudad) {
//   console.log(ciudad);
// }

// ciudades.forEach(callback);

// Listado de paises
const paises = [
  'Francia',
  'España',
  'Portugal',
  'Australia',
  'Inglaterra',
  'Irlanda'
];

function nuevoPais(pais, callback) {
  setTimeout(function() {
    paises.push(pais);
    callback();
  }, 2000);
}

function mostrarPaises() {
  setTimeout(() => {
    let html = '';
    paises.forEach(function(pais) {
      html += `<li> ${pais}</li>`;
    });
    document.getElementById('app').innerHTML = html;
  }, 1000);
}

nuevoPais('Argentina', mostrarPaises);

// mostrar los paises
mostrarPaises();
