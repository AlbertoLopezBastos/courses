// Crear clase ES6

class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  imprimirSaldo() {
    return `Hola ${this.nombre}! Tu saldo es de: $${this.saldo}`;
  }

  tipoCliente() {
    let tipo;

    if (this.saldo > 10000) {
      tipo = 'Platinum';
    } else if (this.saldo > 5000) {
      tipo = 'Gold';
    } else {
      tipo = 'Normal';
    }

    return tipo;
  }

  retirarSaldo(retiro) {
    return (this.saldo -= retiro);
  }

  static bienvenida() {
    return `Bienvenido al Cajero`;
  }
}

const maria = new Cliente('Maria', 10000);

console.log(maria);
console.log(Cliente.bienvenida());
maria.retirarSaldo(3000);
console.log(maria.imprimirSaldo());
console.log(maria.tipoCliente());

// SUBCLASES

class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, tipo) {
    // pido las propiedades de la clase padre
    super(nombre, saldo);
    // propiedades de la clase
    this.telefono = telefono;
    this.tipo = tipo;
  }
  // overrideo una funcion (o prototype)
  static bienvenida() {
    return `Bienvenido al Cajero para Empresas`;
  }
}

const empresa1 = new Empresa('Empresa1', 5000, '555-5555', 'Construccion');

console.log(empresa1);
console.log(Empresa.bienvenida());
console.log(empresa1.imprimirSaldo());
