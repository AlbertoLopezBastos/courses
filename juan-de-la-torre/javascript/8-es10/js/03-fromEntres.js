const map = new Map([
  ['nombre', 'Producto 1'],
  ['precio', 20]
]);

// transformo un map o un set en un object para tener sus metodos.

const objeto = Object.fromEntries(map);
console.log(objeto);

delete objeto.precio;

console.log(objeto);
