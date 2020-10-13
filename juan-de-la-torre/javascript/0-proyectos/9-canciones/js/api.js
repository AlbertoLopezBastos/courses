export class API {
  constructor(artista, cancion) {
    this.artista = artista;
    this.cancion = cancion;
  }
  async fetchAPI() {
    const data = await fetch(
      `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`
    );
    const jsonResponse = await data.json();
    return {
      jsonResponse,
    };
  }
}
