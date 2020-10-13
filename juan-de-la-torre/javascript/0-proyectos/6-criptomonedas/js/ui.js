class UI {
  constructor() {
    this.init();
  }
  init() {
    this.construirSelect();
  }
  construirSelect() {
    cotizador.obtenerMonedas().then(monedas => {
      // crear un select de opciones
      const select = document.querySelector('#criptomoneda');
      // iterar por los resultados de la api
      for (const [key, value] of Object.entries(monedas.monedas.Data)) {
        // agregar el symbol y el nombre como opciones
        const opcion = document.createElement('option');
        opcion.value = value.Symbol;
        opcion.appendChild(document.createTextNode(value.CoinName));

        select.appendChild(opcion);
      }
    });
  }

  mostrarMensaje(msg, clases) {
    const div = document.createElement('div');
    div.className = clases;
    div.appendChild(document.createTextNode(msg));

    const mensajes = document.querySelector('.mensajes');
    mensajes.appendChild(div);

    setTimeout(() => {
      document.querySelector('.mensajes div').remove();
    }, 3000);
  }

  mostrarResultado(resultado, moneda, cryptomoneda) {
    // en caso de resultado anterior ocultarlo.bounce1
    const resultadoAnterior = document.querySelector('#resultado > div');
    if (resultadoAnterior) {
      resultadoAnterior.remove();
    }

    const datosMoneda = resultado[cryptomoneda][moneda];
    let precio = datosMoneda.PRICE.toFixed(2),
      porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2),
      fecha = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString(
        'es-AR'
      );

    // construir el template
    let htmlTemplate = `
        <div class="card bg-warning">
            <div class="card-body text-light">
                <h2 class="card-title">Resultado:</h2>
                <p>El precio de $${datosMoneda.TOSYMBOL} a moneda ${datosMoneda.FROMSYMBOL} es de : $${precio}</p>
                <p>Variacion ultimo dia: % ${porcentaje}</p>
                <p>Ultima actualizacion:${fecha}</p>
            </div>
        </div>
    `;
    // insertar el resultado

    this.toggleSpinner('block');

    setTimeout(() => {
      this.toggleSpinner('none');
      document.querySelector('#resultado').innerHTML = htmlTemplate;
    }, 3000);
  }

  toggleSpinner(vista) {
    const spinner = document.querySelector('.contenido-spinner');

    spinner.style.display = vista;
  }
}
