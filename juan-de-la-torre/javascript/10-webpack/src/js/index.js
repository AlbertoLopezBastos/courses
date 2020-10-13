import '../css/style.scss';

const cliente = [
  'Cliente 1',
  'Cliente 2',
  'Cliente 3',
  'Cliente 4',
  'Cliente 5'
];

let html = '';
cliente.forEach(cliente => {
  html += `
  <li>${cliente}</li>
  `;
});

document.querySelector('#clientes').innerHTML = html;
