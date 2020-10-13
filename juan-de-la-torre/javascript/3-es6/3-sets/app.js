// Sets
// Similar a array pero no puede haber duplicados (su unico uso util)

// Inicializo
let carrito = new Set();

// Agrego datos
carrito.add('Camisa');
carrito.add('Zapatos');
carrito.add('Pantalon');
carrito.add('Guitarra');
carrito.add('Guitarra'); // este no se agrega, ya existe

// Otra forma de inicializar
// importante los corchetes (le pasas un array)

let numeros = new Set([1, 2, 3, 4, 5, 6, 6, 6, 6, 7, 7, 8, 9, 0, 0]);

// Comprar que un valor exista

carrito.has('Camisa'); // TRUE
carrito.delete('Camisa'); // elimina camisa del set
carrito.has('Camisa'); // FALSE

// carrito.clear(); // vacia el set

// Se puede recorrer
carrito.forEach(producto => console.log(producto));

// Convertir un Set a Array
const arregloCarrito = [...carrito];

console.log(carrito);
console.log(arregloCarrito);
console.log(numeros);
