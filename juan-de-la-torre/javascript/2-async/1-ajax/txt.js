document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos() {
  // Crear el objeto xmlHttpRequest
  const xhr = new XMLHttpRequest();

  // Metodo y url
  xhr.open('GET', 'datos.txt', true);

  // Forma ES5 antigua
  xhr.onreadystatechange = function() {
    if (this.status === 200 && this.readyState === 4) {
      document.getElementById(
        'listado'
      ).innerHTML = `<p>${this.responseText}</p>`;
    }
  };

  // Forma ES5 actual
  //   xhr.onload = function() {
  //     if (this.status === 200) {
  //       document.getElementById(
  //         'listado'
  //       ).innerHTML = `<h1>${this.responseText}</h1>`;
  //     }
  //   };

  xhr.send();
}
