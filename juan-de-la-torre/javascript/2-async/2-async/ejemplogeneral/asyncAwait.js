// Async Await

async function ObtenerClientes() {
  // Requiere siempre un promise
  const clientes = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Clientes descargados`);
    }, 2000);
  });

  // error?
  const error = false;

  if (!error) {
    return await clientes; // espero el promise.
  } else {
    await Promise.reject(`Hubo un error....`);
  }
}
ObtenerClientes()
  .then(res => console.log(res))
  .catch(error => console.log(error));
