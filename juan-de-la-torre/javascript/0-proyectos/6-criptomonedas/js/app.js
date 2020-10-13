const cotizador = new API(
  '69f7d78e3177108f36183305bbb4f1f8d8093ab9742641e10c228de4b948adfa'
);
const ui = new UI();

// leer el formulario

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', e => {
  e.preventDefault();

  const monedaSelect = document.querySelector('#moneda');
  const monedaSeleccionada =
    monedaSelect.options[monedaSelect.selectedIndex].value;

  const cryptoSelect = document.querySelector('#criptomoneda');
  const cryptoSeleccionada =
    cryptoSelect.options[cryptoSelect.selectedIndex].value;

  if (cryptoSeleccionada === '' && monedaSeleccionada === '') {
    ui.mostrarMensaje(
      'Ambos campos son obligatorios',
      'alert bg-danger text-center'
    );
  } else {
    // consultar la api
    cotizador
      .obtenerValores(monedaSeleccionada, cryptoSeleccionada)
      .then(data => {
        ui.mostrarResultado(
          data.resultado.RAW,
          monedaSeleccionada,
          cryptoSeleccionada
        );
      });
  }
});
