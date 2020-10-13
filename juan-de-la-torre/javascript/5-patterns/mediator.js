const Vendedor = function(nombre) {
  this.nombre = nombre;
  this.sala = null;
};

const Comprador = function(nombre) {
  this.nombre = nombre;
  this.sala = null;
};

Vendedor.prototype = {
  oferta: function(articulo, precio) {
    console.log(
      `Tenemos el siguiente articulo: "${articulo}". Iniciamos en $${precio}.`
    );
  },

  vendido: function(comprador) {
    console.log(`Vendido a ${comprador.nombre}!!!`);
  }
};

Comprador.prototype = {
  oferta: function(mensaje, comprador) {
    console.log(`${comprador.nombre} : ${mensaje}`);
  }
};

const Subasta = function() {
  let compradores = {};

  return {
    registrar: function(usuario) {
      compradores[usuario.nombre] = usuario;
      usuario.sala = this;
    }
  };
};

// instanciar las clases
const juan = new Comprador('Juan'),
  pablo = new Comprador('Pablo'),
  karen = new Comprador('Karen');

const vendedor = new Vendedor('Vendedor');

const subasta = new Subasta();

subasta.registrar(juan);
subasta.registrar(pablo);
subasta.registrar(karen);

vendedor.oferta('Auto', 400);
juan.oferta('450!', juan);
pablo.oferta('550!', pablo);
karen.oferta('600!', karen);
vendedor.vendido(karen);

console.log(juan);
console.log(subasta);
