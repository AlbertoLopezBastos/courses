// This con explicit binding

// una funcion con un console log que no recibe nada pero que quiere hacer un this.nombre
function persona(elemento1, elemento2) {
  console.log(
    `hola soy ${this.nombre} y me gusta el ${elemento1} y ${elemento2}`
  );
}

// Un objeto que tiene nombre
const informacion = {
  nombre: 'Beto',
  trabajo: 'Programador'
};

const generosMusicales = ['Heavy Metal', 'Rock'];

// Todas las funciones tienen un call.

// llamo a la funcion pero con "call" y pasandole a call el objeto. haciendole entender a la funcion persona que tiene que laburar con ese objeto.
// Tambien le puedo pasar un array pero le tengo que pasar cada sub indice y ahi si tengo que hacer que la funcion espero esos argumentos
persona.call(informacion, generosMusicales[0], generosMusicales[1]);

// Para no tener que pasar cada subindice uso apply
persona.apply(informacion, generosMusicales);

// Otro explicit binding. Te devuelve la funcion y despues vos la ejecutas.

const nuevaFn = persona.bind(
  informacion,
  generosMusicales[0],
  generosMusicales[1]
);
nuevaFn();
