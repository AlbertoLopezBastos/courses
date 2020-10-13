const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
  ui.mostrarEstablecimientos();
});

// habilitar busqueda de establecimientos
const buscadorCalle = document.querySelector('#buscadorCalle');
const buscadorPrecio = document.querySelector('#buscadorPrecio');

buscadorCalle.addEventListener('input', () => {
  if (buscadorCalle.value.length > 3) {
    // buscar en la api
    ui.obtenerSugerencias(buscadorCalle.value, 'calle');
  } else {
    ui.mostrarEstablecimientos();
  }
});
buscadorPrecio.addEventListener('input', () => {
  if (buscadorPrecio.value.length >= 1) {
    // buscar en la api
    ui.obtenerSugerencias(buscadorPrecio.value, 'precio');
  } else {
    ui.mostrarEstablecimientos();
  }
});
