const url = 'https://jsonplaceholder.typicode.com/todos';

async function leerTodos() {
  // esperar la respuesta
  const respuesta = await fetch(url);

  // procede cuando la respuesta este hecha.

  const datos = await respuesta.json();

  return datos;
}
leerTodos()
  .then(usuarios => console.log(usuarios))
  .catch(error => console.log(error));
