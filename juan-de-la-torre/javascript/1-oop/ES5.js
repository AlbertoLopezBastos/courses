// String
const nombre1 = 'Pedro'; // Crea un string
const nombre2 = new String('Pedro'); // Crea un objeto de tipo String

// Numeros
const numero1 = 20; // Crea un numero
const numero2 = new Number(20); // Crea un objeto de tipo Objeto

// Object literal. No se puede instanciar.
const cliente = {
  nombre: 'Beto',
  saldo: 10000,
  /* Crear una funcion dentro de un objeto no esta mal, pero en una clase ES5 si, se usaria prototype)*/
  tipoCliente: function() {
    let tipo;

    if (this.saldo > 5000) {
      tipo = 'Gold';
    } else if (this.saldo > 3000) {
      tipo = 'Platinum';
    } else {
      tipo = 'Normal';
    }

    return tipo;
  }
};

// Clase ES5. Se puede instanciar.

function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;

  /* asi se crea MAL una funcion en una clase (se hace por Prototype en ES5) 

  this.tipoCliente = function() {
    let tipo;

    if (this.saldo > 5000) {
      tipo = 'Gold';
    } else if (this.saldo > 3000) {
      tipo = 'Platinum';
    } else {
      tipo = 'Normal';
    }

    return tipo;
  }; */
}

// Crear un Prototype (funcion de clase)

Cliente.prototype.tipoCliente = function() {
  let tipo;

  if (this.saldo > 5000) {
    tipo = 'Gold';
  } else if (this.saldo > 3000) {
    tipo = 'Platinum';
  } else {
    tipo = 'Normal';
  }

  return tipo;
};

// Segundo Prototype

Cliente.prototype.nombreClienteSaldo = function() {
  return `Nombre:${this.nombre}, tu saldo es de: ${
    this.saldo
  }, Tipo Cliente: ${this.tipoCliente()}`;
};

// Tercer Prototype

Cliente.prototype.retirarSaldo = function(retiro) {
  return (this.saldo -= retiro);
};

// Heredar las propiedades de una clase (ES5)

function Empresa(nombre, saldo, telefono, tipo) {
  Cliente.call(this, nombre, saldo); // pido las propiedades de la clase padre.
  this.telefono = telefono;
  this.tipo = tipo;
}

// Heredar los prototipos (ES5)
Empresa.prototype = Object.create(Cliente.prototype);

// Luego puedo tener prototipos propios de la clase.
Empresa.prototype.holabo = function() {
  console.log('tengo');
};

// Instancio ambos objetos para test

const cliente1 = new Cliente('Pedro', 100);
const empresa1 = new Empresa('Nirvana', 500000, '555-5555', 'Pyme');

// OBJECT CREATE

const Persona = {
  //Objeto Literal con Prototypes dentro.
  imprimirSaldo: function() {
    return `Hola ${this.nombre}! Tu saldo es: $${this.saldo}`;
  },

  retirarSaldo: function(retiro) {
    return (this.saldo -= retiro);
  }
};

// Instancio el objeto
const mary = Object.create(Persona);

// Recien aqui declaro propiedades.
mary.nombre = 'Mary';
mary.saldo = 1000;

// Ahora puedo llamar los Prototypes que usan esas propiedades.
mary.retirarSaldo(300);
console.log(mary.imprimirSaldo());
