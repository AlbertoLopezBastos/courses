class EventBrite {
  constructor() {
    this.token_oauth = 'QZTK6EMP3RSGII2NNXYC';
    this.token_publico = 'HL2NL7WSTSHF4FAAUE22';
    this.ordenar = 'date';
  }

  async obtenerCategorias() {
    const respuestaCategorias = await fetch(
      `https://www.eventbriteapi.com/v3/categories/?token=${this.token_oauth}`
    );

    const categorias = await respuestaCategorias.json();

    return {
      categorias
    };
  }

  async obtenerEventos(evento, categoria) {
    const respuestaEventos = await fetch(
      `https://www.eventbriteapi.com/v3/events/93324296483/?token=${this.token_oauth}`
    );

    const resultado = await respuestaEventos.json();

    return {
      resultado
    };
  }
}
