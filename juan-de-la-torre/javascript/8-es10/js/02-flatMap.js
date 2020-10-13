const productos = [
  { nombre: 'Producto 1', precio: 20 },
  { nombre: 'Producto 2', precio: 30 },
  { nombre: 'Producto 3', precio: 40 }
];

// primero hago un map (me devuelve un array con arrays)
let resultado = productos.map(producto => [producto.nombre, producto.precio]);

// ahora hago un flat (aplano ese array de arrays)
resultado = resultado.flat(1);
console.log(resultado);

// flatMap hace un map y despues un flat de una vez
let resultado2 = productos.flatMap(producto => [
  producto.nombre,
  producto.precio
]);

console.log(resultado2);
