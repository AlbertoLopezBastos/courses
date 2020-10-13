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

  //conectar con fetch

  fetch(url)
    .then(res => res.json())
    .then(data => {
      let htmlTemplate = '<h2>Nombres Generados</h2>';

      htmlTemplate += '<ul class="lista">';
      data.forEach(name => {
        htmlTemplate += `<li>${name.name}</li>`;
      });

      htmlTemplate += '</ul>';
      document.getElementById('resultado').innerHTML = htmlTemplate;
    })
    .catch(err => console.log(err));
}
