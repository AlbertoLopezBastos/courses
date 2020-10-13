import '../css/style.scss';

class Cliente {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

const cliente = new Cliente('Beto');
console.log(cliente);
console.log('Desde el Nosotros');
