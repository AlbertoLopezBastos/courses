// Seguro Constructor

class Seguro {
  constructor(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
  }

  cotizarSeguro() {
    /*
        1 = americano 1.15
        2 = asiatico 1.05
        3 = europeo 1.35    
    */
    let cantidad;
    const base = 2000;

    switch (this.marca) {
      case '1':
        cantidad = base * 1.15;
        break;
      case '2':
        cantidad = base * 1.05;
        break;
      case '3':
        cantidad = base * 1.35;
        break;
    }

    // leer del anio
    const diferencia = new Date().getFullYear() - this.anio;
    //cada anio de diferencia hay que reducir 3% el valor del seguro.
    cantidad -= cantidad * (diferencia * 0.03);
    /* si el seguro es basico se multiplica por 30% mas
      si el seguro es completo 50% mas */
    if (this.tipo === 'basico') {
      cantidad *= 1.3;
    } else {
      cantidad *= 1.5;
    }
    return cantidad;
  }
}

// Todo lo que se muestra
class Interfaz {
  constructor() {}

  // mensaje que se imprime
  mostrarMensaje(mensaje, tipo) {
    const div = document.createElement('div');

    if (tipo === 'error') {
      div.classList.add('mensaje', 'error');
    } else {
      div.classList.add('mensaje', 'correcto');
    }
    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector('form-group'));

    setTimeout(() => {
      document.querySelector('.mensaje').remove();
    }, 3000);
  }

  // mostrar resultado
  mostrarResultado(seguro, cantidad) {
    const resultado = document.getElementById('resultado');

    let marca;
    switch (seguro.marca) {
      case '1':
        marca = 'Americano';
        break;
      case '2':
        marca = 'Asiatico';
        break;
      case '3':
        marca = 'Europeo';
        break;
    }

    // crear un div
    const div = document.createElement('div');
    // insertar la informacion

    div.innerHTML = `
        <p class='header'>Tu Resumen:</p>
        <p>Marca: ${marca}</p>
        <p>Año: ${seguro.anio}</p>
        <p>Tipo: ${seguro.tipo}</p>
        <p>Total: $ ${cantidad.toFixed(2)}</p>
      `;

    const spinner = document.querySelector('#cargando img');
    spinner.style.display = 'block';
    setTimeout(() => {
      spinner.style.display = 'none';
      resultado.appendChild(div);
    }, 3000);
  }
}
// event listeners

const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  // leer la marca seleccionada del select
  const marca = document.getElementById('marca');
  const marcaSeleccionada = marca.options[marca.selectedIndex].value;
  // leer el anio seleccionado del select
  const anio = document.getElementById('anio');
  const anioSeleccionado = anio.options[anio.selectedIndex].value;
  // leee el valor del radioButton
  const tipo = document.querySelector('input[name=tipo]:checked').value;
  // crear instancia de interfaz
  const interfaz = new Interfaz();
  // revisamos que los campos no esten vacios
  if (marcaSeleccionada === '' || anioSeleccionado === '' || tipo === '') {
    //interfaz imprimiendo un error
    interfaz.mostrarMensaje(
      'Faltan Datos, revisar el formulario y prueba de nuevo',
      'error'
    );
  } else {
    // limpiar resultados anteriores
    const resultados = document.querySelector('#resultado div');
    if (resultados) {
      resultados.remove();
    }
    // instanciar seguro y mostrar interfaz

    const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);
    const cantidad = seguro.cotizarSeguro();
    // mostrar el resultado
    interfaz.mostrarResultado(seguro, cantidad);
    interfaz.mostrarMensaje('cotizando...', 'correcto');
  }
});

const max = new Date().getFullYear(),
  min = max - 20;

const selectAnios = document.getElementById('anio');

for (let i = max; i > min; i--) {
  let option = document.createElement('option');
  option.value = i;
  option.innerHTML = i;
  selectAnios.appendChild(option);
}
