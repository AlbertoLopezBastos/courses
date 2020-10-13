let DB;

// selectores de la interfaz

const form = document.querySelector('form'),
  nombreMascota = document.querySelector('#mascota'),
  nombreCliente = document.querySelector('#cliente'),
  telefono = document.querySelector('#telefono'),
  fecha = document.querySelector('#fecha'),
  hora = document.querySelector('#hora'),
  sintomas = document.querySelector('#sintomas'),
  citas = document.querySelector('#citas'),
  headingAdministra = document.querySelector('#administra');
// esperar por el dom ready

document.addEventListener('DOMContentLoaded', () => {
  // Crear la base de datos
  let crearDB = window.indexedDB.open('citas', 1);

  // Si hay un error enviarlo a la consola
  crearDB.onerror = () => console.log('hubo un error');

  // Si todo esta bien mostrar en consola
  crearDB.onsuccess = () => {
    //Asignar a la base de datos
    DB = crearDB.result;

    mostrarCitas();
  };

  // Este metodo solo corre una vez y es ideal para crear el schema de la db
  crearDB.onupgradeneeded = e => {
    // el evento es la misma base de datos.container
    let db = e.target.result;

    // definir el objecrStore, toma 2 parametros el nombre de la base de datos y las opciones
    // keyPath es el indice de la base de datos.
    let objectStore = db.createObjectStore('citas', {
      keyPath: 'key',
      autoIncrement: true
    });

    // crear los indices y campos de la base de datos createIndex: 3 parametros : nombre, keyPath y opciones
    objectStore.createIndex('mascota', 'mascota', { unique: false });
    objectStore.createIndex('cliente', 'cliente', { unique: false });
    objectStore.createIndex('telefono', 'telefono', { unique: false });
    objectStore.createIndex('fecha', 'fecha', { unique: false });
    objectStore.createIndex('hora', 'hora', { unique: false });
    objectStore.createIndex('sintomas', 'sintomas', { unique: false });

    console.log('Base de datos creada y lista');
  };

  // cuando el form se envia
  form.addEventListener('submit', agregarDatos);

  function agregarDatos(e) {
    e.preventDefault();

    const nuevaCita = {
      mascota: nombreMascota.value,
      cliente: nombreCliente.value,
      telefono: telefono.value,
      fecha: fecha.value,
      hora: hora.value,
      sintomas: sintomas.value
    };

    // en IndexedDb se utilizan las transacciones
    let transaction = DB.transaction(['citas'], 'readwrite'),
      objectStore = transaction.objectStore('citas'),
      peticion = objectStore.add(nuevaCita);

    peticion.onsuccess = () => form.reset();
    transaction.oncomplete = () => {
      console.log('Cita agregada');
      mostrarCitas();
    };

    peticion.onerror = () => console.log('Hubo un error');
  }

  function mostrarCitas() {
    // limpiar las citas anteriores
    while (citas.firstChild) {
      citas.removeChild(citas.firstChild);
    }

    // creamos un objectStore

    let objectStore = DB.transaction('citas').objectStore('citas');

    //esto retorna una peticion
    objectStore.openCursor().onsuccess = function(e) {
      // cursor se ubica en el registro indicado para acceder a los datos
      let cursor = e.target.result;

      if (cursor) {
        let citaHTML = document.createElement('li');
        citaHTML.setAttribute('data-cita-id', cursor.value.key);
        citaHTML.classList.add('list-group-item');

        citaHTML.innerHTML = `
         <p class="font-weight-bold">Mascota: <span class="font-weight-normal">${cursor.value.mascota}</span></p>
         <p class="font-weight-bold">Cliente: <span class="font-weight-normal">${cursor.value.cliente}</span></p>
         <p class="font-weight-bold">Telefono: <span class="font-weight-normal">${cursor.value.telefono}</span></p>
         <p class="font-weight-bold">Fecha: <span class="font-weight-normal">${cursor.value.fecha}</span></p>
         <p class="font-weight-bold">Hora: <span class="font-weight-normal">${cursor.value.hora}</span></p>
         <p class="font-weight-bold">Sintomas: <span class="font-weight-normal">${cursor.value.sintomas}</span></p>
        `;

        //boton borrar
        const botonBorrar = document.createElement('button');
        botonBorrar.classList.add('borrar', 'btn', 'btn-danger');
        botonBorrar.innerHTML = "<span aria-hidden='true'>x</span> Borrar";
        botonBorrar.onclick = borrarCita;
        citaHTML.appendChild(botonBorrar);

        //Append en el padre
        citas.appendChild(citaHTML);
        // Tomar los proximos registros
        cursor.continue();
      } else {
        if (!citas.firstChild) {
          // no hay registros
          headingAdministra.textContent = 'Agrega Citas para comenzar';
          let listado = document.createElement('p');
          listado.classList.add('text-center');
          listado.textContent = 'No hay registros';
          citas.appendChild(listado);
        } else {
          headingAdministra.textContent = 'Administra tus citas';
        }
      }
    };
  }

  function borrarCita(e) {
    e.preventDefault();
    let citaID = Number(e.target.parentElement.getAttribute('data-cita-id'));

    // en IndexedDb se utilizan las transacciones
    let transaction = DB.transaction(['citas'], 'readwrite'),
      objectStore = transaction.objectStore('citas'),
      peticion = objectStore.delete(citaID);

    transaction.oncomplete = () => {
      e.target.parentElement.parentElement.removeChild(e.target.parentElement);
      console.log('Cita Eliminada');

      if (!citas.firstChild) {
        // no hay registros
        headingAdministra.textContent = 'Agrega Citas para comenzar';
        let listado = document.createElement('p');
        listado.classList.add('text-center');
        listado.textContent = 'No hay registros';
        citas.appendChild(listado);
      } else {
        headingAdministra.textContent = 'Administra tus citas';
      }
    };

    peticion.onerror = () => console.log('Hubo un error al eliminar la cita');
  }
});
