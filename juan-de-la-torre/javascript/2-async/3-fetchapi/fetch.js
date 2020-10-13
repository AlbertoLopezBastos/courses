document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarAPI);

function cargarTXT() {
  fetch('datos.txt')
    .then(res => res.text())
    .then(data => (document.getElementById('resultado').innerHTML = data))
    .catch(err => console.log(err));
}

function cargarJSON() {
  fetch('empleados.json')
    .then(res => res.json())
    .then(data => {
      let htmlTemplate = '';

      data.forEach(element => {
        htmlTemplate += `<h5>${element.nombre}</h5><p>${element.puesto}</p>`;
      });

      document.getElementById('resultado').innerHTML = htmlTemplate;
    })
    .catch(err => console.log(err));
}

function cargarAPI() {
  fetch('https://picsum.photos/list')
    .then(res => res.json())
    .then(data => {
      let htmlTemplate = '<ul>';

      data.forEach(element => {
        htmlTemplate += `
        <li>${element.author}</li>
        <li><a target="_blank" href="${element.post_url}">Ver imagen</a></li>`;
      });

      htmlTemplate += '</ul>';
      document.getElementById('resultado').innerHTML = htmlTemplate;
    })
    .catch(err => console.log(err));
}
