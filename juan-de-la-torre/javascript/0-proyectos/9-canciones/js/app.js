import * as UI from './interfaz.js';
import { API } from './api.js';

UI.formularioBuscar.addEventListener('submit', (e) => {
  e.preventDefault();

  // obtener datos del formulario
  const artista = document.querySelector('#artista').value,
    cancion = document.querySelector('#cancion').value;

  // validar que ambos campos esten validados
  if (artista === '' || cancion === '') {
    // mostrar error
    UI.divMensajes.innerHTML = 'Todos los campos son obligatorios';
    UI.divMensajes.classList.add('error');

    setTimeout(() => {
      UI.divMensajes.innerHTML = '';
      UI.divMensajes.classList.remove('error');
    }, 3000);
  } else {
    // llamar a la a API
    const api = new API(artista, cancion);
    api.fetchAPI().then((response) => {
      if (response.jsonResponse.lyrics) {
        UI.divResultado.textContent = response.jsonResponse.lyrics;
        UI.formularioBuscar.reset();
      } else {
        // limpio si hubo busqueda exitosa antes
        UI.divResultado.innerHTML = '';
        // la cancion no existe
        UI.divMensajes.innerHTML =
          'La cancion no existe, prueba con otra busqueda';
        UI.divMensajes.classList.add('error');

        setTimeout(() => {
          UI.divMensajes.innerHTML = '';
          UI.divMensajes.classList.remove('error');
          UI.formularioBuscar.reset();
        }, 3000);
      }
    });
  }
});
