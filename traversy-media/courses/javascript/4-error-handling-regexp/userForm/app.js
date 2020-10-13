// Form blur event listeners

document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('document').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const nameRe = /^[A-Za-z]{2,10}$/;
  if (!nameRe.test(name.value)) {
    name.classList.add('is-invalid');
  } else if (name.classList.value.indexOf('is-invalid')) {
    name.classList.remove('is-invalid');
  }
}

function validateZip() {
  const zip = document.getElementById('zip');
  const zipRe = /^[0-9]{5}(-[0-9]{4})?$/;

  if (!zipRe.test(zip.value)) {
    zip.classList.add('is-invalid');
  } else if (zip.classList.value.indexOf('is-invalid')) {
    zip.classList.remove('is-invalid');
  }
}
function validateEmail() {
  const email = document.getElementById('email');

  const emailRe = /^([a-zA-z0-9_\-\.]+)@([a-zA-z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (!emailRe.test(email.value)) {
    email.classList.add('is-invalid');
  } else if (email.classList.value.indexOf('is-invalid')) {
    email.classList.remove('is-invalid');
  }
}
function validatePhone() {
  const phone = document.getElementById('phone');
  const phoneRe = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  if (!phoneRe.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else if (phone.classList.value.indexOf('is-invalid')) {
    phone.classList.remove('is-invalid');
  }
}

function validateRegExp() {
  if (!re.test(control.value)) {
    control.classList.add('is-invalid');
  } else if (control.classList.value.indexOf('is-invalid')) {
    control.classList.remove('is-invalid');
  }
}
