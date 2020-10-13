class UI {
  constructor() {
    // inicializa la app al instanciar
    this.init();
    // leer el resultado
    this.listado = document.getElementById('resultado-eventos');
  }

  // metodo para cuando inicialice la app

  init() {
    this.imprimirCategorias();
  }

  imprimirCategorias() {
    const listaCategorias = eventBrite.obtenerCategorias().then(categorias => {
      const cats = categorias.categorias.categories;

      const selectCategoria = document.getElementById('listado-categorias');

      cats.forEach(cat => {
        const option = document.createElement('option');

        option.value = cat.id;
        option.appendChild(document.createTextNode(cat.name_localized));
        selectCategoria.appendChild(option);
      });
    });
  }

  mostrarMensaje(msg, clase) {
    const mensaje = document.createElement('div');
    mensaje.classList = clase;
    mensaje.appendChild(document.createTextNode(msg));
    const buscardorDiv = document.querySelector('#buscador');
    buscardorDiv.appendChild(mensaje);

    setTimeout(() => {
      mensaje.remove();
    }, 3000);
  }

  mostrarEventos(resultado) {
    // limpio antes
    this.listado.innerHTML = '';
    const listaEventos = resultado.resultado;

    console.log(listaEventos);

    // recorrer los eventos y crear su template
    this.listado.innerHTML += `
    <div class="col-md-4 mb-4">
      <div class="card">
          <img class="img-fuild mb-2" src="${
            listaEventos.logo !== null ? listaEventos.logo.url : ''
          }"/>
        <div class="card-body">
          <div class="card-text">
            <h2 class="text-center">${listaEventos.name.text}</h2>
            <p class="lead text-info">Informacion del evento</p>
            <p>${listaEventos.description.text.substring(0, 280)}...</p>
            <span class="badge badge-primary">Capacidad: ${
              listaEventos.capacity !== null
                ? listaEventos.capacity
                : 'No especificado.'
            }</span>
          </div>
          <span class="badge badge-secondary">Fecha y hora: ${
            listaEventos.start.local
          }</span>
          <a href="${
            listaEventos.url
          }" target="_blank" class="btn btn-primary btn-block mt-4">Comprar Boletos</a>
        </div>
      </div>
    </div>
    `;
  }
}
