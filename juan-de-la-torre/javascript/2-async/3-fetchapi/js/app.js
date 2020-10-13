document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarAPI);

function cargarTXT() {
  fetch('datos.txt')
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      document.getElementById('resultado').innerHTML = data;
    })
    .catch(function(err) {
      console.log(err);
    });
}

function cargarJSON() {
  fetch('empleados.json')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      let htmlTemplate = '';

      data.forEach(element => {
        htmlTemplate += `<h5>${element.nombre}</h5><p>${element.puesto}</p>`;
      });

      document.getElementById('resultado').innerHTML = htmlTemplate;
    })
    .catch(function(err) {
      console.log(err);
    });
}
function cargarAPI() {
  fetch('https://picsum.photos/list')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      let htmlTemplate = '<ul>';

      data.forEach(function(element) {
        htmlTemplate += `
        <li>${element.author}</li>
        <li><a target="_blank" href="${element.post_url}">Ver imagen</a></li>`;
      });

      htmlTemplate += '</ul>';
      document.getElementById('resultado').innerHTML = htmlTemplate;
    })
    .catch(function(err) {
      console.log(err);
    });
}
