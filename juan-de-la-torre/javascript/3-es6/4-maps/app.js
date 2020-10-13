// Maps

let cliente = new Map();

cliente.set('nombre', 'Beto');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 30);
cliente.set('Instrumentos', 'Guitarra');

// Acceder a los valores
cliente.get('nombre'); // devuelve Karen
cliente.get('tipo'); // devuelve Premium
cliente.get('saldo'); // devuelve 30

// Metodos

console.log(cliente.size); // imprime 4;
cliente.has('nombre'); // true
cliente.delete('nombre'); // borra nombre
cliente.has('nombre'); // false

// cliente.clear(); // borra todo

console.log(cliente);

// Propiedades por default a un map

const paciente = new Map([
  ['Nombre', 'Paciente Default'],
  ['Habitacion', 'No Definido']
]);

console.log(paciente);

paciente.set('Nombre', 'Beto');
paciente.set('Habitacion', 404);
paciente.set('Habitacion', 505); // sobreescribe, no crea otro con la misma key

console.log(paciente);

// recorrer map

paciente.forEach(datos => console.log(datos));

paciente.forEach((datos, index) => {
  console.log(`${index} : ${datos}`);
});

// Maps es bueno cuando necesitas mucha info key value pair, porque se accede y se itera mas rapido y facil en casos donde se necesite funciones usar object
