function sumar(a, b) {
  // suma dos numeros
  return a + b;
}

console.log(sumar.toString()); // printea el codigo de la funcion

function Automovil(modelo, color) {
  this.modelo = modelo;
  this.color = color;
}

const auto = new Automovil('Camaro', 'Negro');

// overrideo la funcion y elijo que tiene que hacer
Automovil.prototype.toString = function autoString() {
  const datos = `Auto: ${this.modelo} y color ${this.color}`;
  return datos;
};

console.log(auto.toString());
