// iterador por defecto, el FOR

for (let i = 0; i < 10; i++) {
  //console.log(i);
}

// Iterador manual, con el cual llamas cada iteracion.

function crearIterador(carrito) {
  // Inicializamos el indice
  let i = 0;

  // devuelvo un objeto
  return {
    // que consta de key siguiente y value es una funcion
    siguiente: () => {
      let fin = i >= carrito.length; // false hasta llegar al final
      let valor = !fin ? carrito[i++] : undefined; // aumento el valor de i (pero despues de que carrito toma el valor) ++i lo aumentaria primero

      return {
        // por ultimo esta funcion devuelve un objeto mas los valores.
        fin: fin,
        valor: valor
      };
    }
  };
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

// intancio la variable, llamando a la funcion por primera vez.
const recorrerCarrito = crearIterador(carrito);

// recorrerCarrito se transformara en un objeto, que tiene una key llamada siguiente, que es una funcion.
console.log(recorrerCarrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());

// POR ALGUNA RAZON recorrerCarrito RECUERDA EL VALOR DE I
