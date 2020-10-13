// variables
const presupuestoUsuario = prompt('Cual es tu presupuesto semanal?');
const formulario = document.getElementById('agregar-gasto');
let cantidadPresupuesto;
const gastosListado = document.querySelector('#gastos ul');

// clases
// presupuesto
class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
  }

  // funcion para ir restando
  presupuestoRestante(cantidad = 0) {
    return (this.restante -= Number(cantidad));
  }
}

class Interfaz {
  insertarPresupuesto(cantidad) {
    const spanTotal = document.querySelector('span#total');
    spanTotal.innerHTML = cantidad;
    const spanRestante = document.querySelector('span#restante');
    spanRestante.innerHTML = cantidad;
  }
  imprimirMensaje(mensaje, tipo) {
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('text-center', 'alert');
    if (tipo === 'error') {
      divMensaje.classList.add('alert-danger');
    } else {
      divMensaje.classList.add('alert-success');
    }
    divMensaje.appendChild(document.createTextNode(mensaje));

    // insertar en el DOM
    document.querySelector('.primario').insertBefore(divMensaje, formulario);

    setTimeout(() => {
      divMensaje.remove();
      formulario.reset();
    }, 3000);
  }
  agregarGasto(gasto, cantidad) {
    const li = document.createElement('li');
    li.className =
      'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `${gasto} <span class="badge badge-primary badge-pill">
    $${cantidad}</span>`;
    gastosListado.appendChild(li);
  }
  // comprueba el presupuesto restante
  presupuestoRestante(cantidad) {
    // tomo el input de restante
    const restante = document.querySelector('span#restante');
    // leemos el presupuesto restante
    const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(
      cantidad
    );

    restante.innerHTML = `${presupuestoRestanteUsuario}`;

    this.comprobarPresupuesto();
  }
  comprobarPresupuesto() {
    const restante = document.querySelector('.restante');
    console.log(restante.className);

    if (cantidadPresupuesto.restante < cantidadPresupuesto.presupuesto * 0.25) {
      restante.className = 'restante alert alert-danger';
    } else if (
      cantidadPresupuesto.restante <
      cantidadPresupuesto.presupuesto * 0.5
    ) {
      restante.className = 'restante alert alert-warning';
    } else {
      restante.className = 'restante alert alert-success';
    }
  }
}

// event listeners
document.addEventListener('DOMContentLoaded', () => {
  if (presupuestoUsuario === null || presupuestoUsuario === '') {
    window.location.reload();
  } else {
    // instanciar ui
    const ui = new Interfaz();
    // instanciar presupuesto
    cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
    ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
  }
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  //leer del formulario los datos
  const gasto = document.querySelector('#gasto').value;
  const cantidad = document.querySelector('#cantidad').value;

  // instanciar ui
  const ui = new Interfaz();

  // comprobar que los campos no esten vacios
  if (gasto === '' || cantidad === '') {
    ui.imprimirMensaje('Complete todos los campos', 'error');
  } else {
    ui.imprimirMensaje('Correcto', 'correcto');
    ui.agregarGasto(gasto, cantidad);
    ui.presupuestoRestante(cantidad);
  }
});
