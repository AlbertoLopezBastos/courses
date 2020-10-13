document
  .querySelector('#generar-nombre')
  .addEventListener('submit', cargarNombres);

function cargarNombres(e) {
  e.preventDefault();

  const origen = document.getElementById('origen');
  const origenSeleccionado = origen.options[origen.selectedIndex].value;

  const genero = document.getElementById('genero');
  const generoSeleccionado = genero.options[genero.selectedIndex].value;

  const cantidad = document.getElementById('numero').value;

  let url = '';
  url += 'https://uinames.com/api/?';
  // si hay variable se agrega a la url
  if (origenSeleccionado != '') {
    url += `region=${origenSeleccionado}&`;
  }
  if (generoSeleccionado != '') {
    url += `gender=${generoSeleccionado}&`;
  }
  if (cantidad != '') {
    url += `amount=${cantidad}&`;
  }

  //conectar con ajax

  const xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);

  xhr.onload = function() {
    if (this.status === 200) {
      const names = JSON.parse(xhr.responseText);
      let htmlTemplate = '<h2>Nombres Generados</h2>';

      htmlTemplate += '<ul class="lista">';
      names.forEach(function(name) {
        htmlTemplate += `<li>${name.name}</li>`;
      });

      htmlTemplate += '</ul>';
      document.getElementById('resultado').innerHTML = htmlTemplate;
    }
  };

  xhr.send();
}
