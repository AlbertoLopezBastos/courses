// variables
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const btnEnviar = document.querySelector('#enviar');
const formularioEnviar = document.querySelector('#enviar-mail');
const resetBtn = document.getElementById('resetBtn');

// event listeners
eventListeners();

function eventListeners() {
  document.addEventListener('DOMContentLoaded', inicioApp);
  document.addEventListener('focusout', validate);
  btnEnviar.addEventListener('click', enviarEmail);
  resetBtn.addEventListener('click', resetFormulario);
}

// funciones

function inicioApp() {
  // deshabilitar el envio
  btnEnviar.disabled = true;
}

function validate(e) {
  // validar longitud y que no este vacio
  validarLongitud(e.target);
  // validar el email
  if (e.target.id === 'email') {
    validarEmail(e.target);
  }

  let errores = document.querySelectorAll('.error');

  if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
    if (errores.length === 0) {
      btnEnviar.disabled = false;
    }
  }
}

//submit
function enviarEmail(e) {
  //spinner al loading

  const spinnerGif = document.querySelector('#spinner');
  spinnerGif.style.display = 'block';

  const enviado = document.createElement('img');
  enviado.src = 'img/mail.gif';
  enviado.style.display = 'block';

  setTimeout(() => {
    spinnerGif.style.display = 'none';
    document.querySelector('#loaders').appendChild(enviado);

    setTimeout(() => {
      enviado.remove();
      formularioEnviar.reset();
    }, 5000);
  }, 3000);

  e.preventDefault();
}

function validarLongitud(campo) {
  if (campo.value.length > 0) {
    campo.style.borderBottomColor = 'green';
    campo.classList.remove('error');
  } else {
    campo.style.borderBottomColor = 'red';
    campo.classList.add('error');
  }
}

function validarEmail(campo) {
  const mensaje = campo.value;
  if (mensaje.indexOf('@') !== -1) {
    campo.style.borderBottomColor = 'green';
    campo.classList.remove('error');
  } else {
    campo.style.borderBottomColor = 'red';
    campo.classList.add('error');
  }
}

function resetFormulario(e) {
  formularioEnviar.reset();

  e.preventDefault();
}
