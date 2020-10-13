class UI {
  constructor() {
    // instanciar API
    this.api = new API();

    // Crear los markers con LayerGroup
    this.markers = new L.LayerGroup();

    // Iniciar el mapa
    this.mapa = this.inicializarMapa();
  }

  inicializarMapa() {
    // Inicializar y obtener la propiedad del mapa
    const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
    const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; ' + enlaceMapa + ' Contributors',
      maxZoom: 18,
    }).addTo(map);
    return map;
  }

  mostrarEstablecimientos() {
    this.api.obtenerDatos().then((datos) => {
      const resultado = datos.respuestaJson.results;

      // ejecturar la funcion para mostrar los pines
      this.mostrarPines(resultado);
    });
  }

  mostrarPines(datos) {
    // limpiar los markers
    this.markers.clearLayers();

    // recorrer los establecimientos
    datos.forEach((dato) => {
      // destructuring
      const { longitude, latitude, calle, regular, premium } = dato;

      //crear popup
      const opcionesPopUp = L.popup().setContent(`<p>Calle: ${calle}</p>
        <p><b>Regular:</b> $${regular}</p>
        <p><b>Premium:</b> $${premium}</p>
        `);

      // agregar el PIN
      const marker = new L.marker([
        parseFloat(latitude),
        parseFloat(longitude),
      ]).bindPopup(opcionesPopUp); // bindpopup relaciona el marker con el popup
      // lo agrego al layer (esto no lo muestra definitivamente)
      this.markers.addLayer(marker);
    });

    // muestro los markers eligiendo cual mapa (esto muestra definitivamente los pines)
    this.markers.addTo(this.mapa);
  }

  // buscador
  obtenerSugerencias(busqueda, tipo) {
    this.api.obtenerDatos().then((datos) => {
      // obtener los datos
      const resultados = datos.respuestaJson.results;

      // enviar el JSON y la busqeuda para el filtrado
      this.filtrarSugerencias(resultados, busqueda, tipo);
    });
  }
  // filtra las sugerencias en base al input

  filtrarSugerencias(resultados, busqueda, tipo) {
    let filtro;
    if (tipo === 'calle') {
      // filtrar con .filter
      filtro = resultados.filter(
        (datos) => datos.calle.indexOf(busqueda) !== -1
      );
    } else if (tipo === 'precio') {
      // filtrar con .filter
      filtro = resultados.filter((datos) => datos.regular < busqueda);
    }

    // mostrar los pines
    this.mostrarPines(filtro);
  }
}
