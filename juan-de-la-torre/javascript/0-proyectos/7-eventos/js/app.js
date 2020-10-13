const eventBrite = new EventBrite();
const ui = new UI();

// listener al buscador

document.getElementById('buscarBtn').addEventListener('click', e => {
  e.preventDefault();

  // leer el texto del input buscar
  const textoBuscador = document.getElementById('evento').value;

  const categorias = document.getElementById('listado-categorias');
  const categoriaSeleccionada =
    categorias.options[categorias.selectedIndex].value;

  if (textoBuscador !== '') {
    eventBrite
      .obtenerEventos(textoBuscador, categoriaSeleccionada)
      .then(resultado => {
        if (resultado) {
          ui.mostrarEventos(resultado);
        } else {
          ui.mostrarMensaje('No hay resultados', 'alert alert-danger mt-4');
        }
      });
  } else {
    ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4');
  }
  return;
});
