// window binding

function obtenerAuto() {
  console.log(`Mi auto es color ${this.color}`);
}

const color = 'Negro';
// sino encuentra nada en un this lo busca en el window
window.color = 'Rojo';
obtenerAuto();
