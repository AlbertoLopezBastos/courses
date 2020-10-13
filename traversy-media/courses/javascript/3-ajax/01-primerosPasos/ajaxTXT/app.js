// obtengo el boton y le agrego el listener para ir a buscar la info.
document.getElementById('button').addEventListener('click', loadData);

// Funcion para obtener la info.
function loadData() {
  // Creo  un XHR Object
  const xhr = new XMLHttpRequest();

  // lo abro (method, url, async)
  xhr.open('GET', 'data.txt', true);

  // Opcional - Para poner loadings.
  xhr.onprogress = function() {
    // poner el gif de loading.
  };

  // forma ES5 antigua de hacerlo. No se usa mas, lupea todos los estados hasta llegar al 4.
  //   xhr.onreadystatechange = function() {
  //     if (this.readyState === 4 && this.status === 200) {
  //       console.log(this.responseText);
  //     }
  //   };

  // forma ES5 actual de hacerlo. Ya no necesito preguntar por el estado 4.
  xhr.onload = function() {
    if (this.status === 200) {
      document.getElementById('output').innerHTML = `
        <h1>${this.responseText}<h1/>
        `;
    }
  };

  // Si hay error lo comunico.
  xhr.onerror = function() {
    console.log('Request error...');
  };

  // obligatorio, para finalizar.
  xhr.send();
}

// ReadyState values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// HTTP Status
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"
