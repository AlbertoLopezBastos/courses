// Declarar una funcion como una variable.

let aprendiendo;

aprendiendo = function() {
  return 'Aprendiendo Javascript';
};

// Declarar una funcion normalmente
function aprendiendo2() {
  return 'Aprendiendo Javascript 2';
}

// Arrow function
aprendiendo3 = () => {
  return 'Aprendiendo Javascript 3';
};

// Arrow function de una linea (no requiere llaves) y ya tiene el return
aprendiendo4 = () => 'Aprendiendo Javascript 4';

// Retona Objeto
aprendiendo5 = () => ({
  aprendiendo: 'Aprendiendo Javascript 5'
});

// Pasar parametros
aprendiendo6 = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
// Pasar 2 o mas parametros
aprendiendo6 = (tecnologia1, tecnologia2) =>
  console.log(`Aprendiendo ${tecnologia} y ${teconologia2}`);

console.log(aprendiendo());
console.log(aprendiendo2());
console.log(aprendiendo3());
console.log(aprendiendo4());

//

const productos = ['Disco', 'Camisa', 'Guitarra'];

// arrow como callback de map
const letrasProductos = productos.map(producto => producto.length);
console.log(letrasProductos);

// arrow como callback de foreach
productos.forEach(producto => console.log(producto));
