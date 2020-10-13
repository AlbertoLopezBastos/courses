// Symbols

const simbolo = Symbol();
const simbolo2 = Symbol('Descripcion aqui');

console.log(Symbol() === Symbol()); // Cada simbolo es unico
console.log(simbolo);
console.log(simbolo2);

// Ejemplo

let nombre = Symbol(),
  apellido = Symbol('Apellido');

// Crear una persona

let persona = {};
persona.nombre = 'Beto';
persona[nombre] = 'Fabian'; // aca lo que esta entre corchetes es el symbol;
persona[apellido] = 'Lopez';
persona.saldo = 100;
persona.tipoCliente = 'Normal';

console.log(persona[nombre]); // accedo al symbol con corchetes

// los Symbols no se pueden acceder en una iteracion normal, son como propiedades privadas

for (let i in persona) {
  console.log(`${i} : ${persona[i]}`);
}
