// Destructuracion con objetos

const cliente1 = {
  nombre1: 'Alejandra',
  tipo1: 'Premium'
};

let { nombre1, tipo1 } = cliente1; // extraigo el la key tipo del objeto

console.log(nombre1);
console.log(tipo1);

// Destructuracion con objetos complejos

const cliente2 = {
  tipo2: 'Premium',
  nombre2: 'Beto',
  datos: {
    ubicacion: {
      ciudad: 'Moron',
      pais: 'Argentina'
    },
    cuenta: {
      desde: '10-12-2012',
      saldo: 400
    }
  }
};

let {
  datos: { ubicacion }
} = cliente2; // extraigo llamando al key padre y luego el key que quiero
let {
  datos: { cuenta }
} = cliente2;

console.log(ubicacion);
console.log(cuenta);

// se puede poner valores default como las funciones

const cliente3 = {
  nombre: 'Beto'
};

let { nombre, tipo3 = 'basico', saldo = 0 } = cliente3;

console.log(nombre);
console.log(tipo3);
console.log(saldo);

// destructuracion de arrays

const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];

const [primeraCiudad, segundaCiudad] = ciudades;
console.log(primeraCiudad);
console.log(segundaCiudad);

// extraer solo los ultimos dos
const [, , madrid, paris] = ciudades;

console.log(paris);

// extraer el objeto de un array

const cliente4 = {
  tipo4: 'Premium',
  saldo4: 30000,
  datos4: {
    nombre: 'Pedro',
    apellido: 'Perez',
    residencia: {
      ciudad: {
        dis: 'Moron',
        das: 5
      }
    }
  },
  movimientos: ['12-03-2048', '12-03-2017', '12-03-2055']
};

let {
  tipo4,
  datos4,
  datos4: { residencia },
  movimientos: [uno, dos]
} = cliente4;

console.log(tipo4);
console.log(datos4);
console.log(residencia);
console.log(uno);
console.log(dos);

// extraer datos de una funcion
// metodo viejo

function reservacion(completo, opciones) {
  opciones = opciones || {};

  let metodo = opciones.metodoPago,
    cantidad = opciones.cantidad,
    dias = opciones.dias;

  console.log(metodo);
  console.log(cantidad);
  console.log(dias);
  console.log(completo);
}

reservacion(true, { metodoPago: 'Tarjeta', cantidad: 2000, dias: 3 });

// metodo nuevo
function reservacion2(completo, opciones) {
  let { metodo = 'normal', cantidad = 0, dias = 0 } = opciones || {};

  console.log(metodo);
  console.log(cantidad);
  console.log(dias);
  console.log(completo);
}

reservacion2(true);
