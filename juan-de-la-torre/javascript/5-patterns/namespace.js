// el objetivo es tener funciones, variables, en un namespace para que no colisiones los nombres.

const restaurApp = {};
restaurApp.platillos = [
  { platillo: 'Pizza', precio: 25 },
  { platillo: 'Hamburguesa', precio: 20 },
  { platillo: 'Hot Dog', precio: 15 }
];

// funciones

restaurApp.funciones = {
  ordenar: id =>
    console.log(
      `Tu Platillo: ${restaurApp.platillos[id].platillo} se esta preparando`
    ),
  agregarPlatillo: (platillo, precio) => {
    const nuevo = {
      platillo,
      precio
    };
    restaurApp.platillos.push(nuevo);
  },
  mostrarMenu: platillos => {
    console.log(`Bienvenido a Nuestro menu:`);
    platillos.forEach((platillo, index) => {
      console.log(`${index} : ${platillo.platillo} $ ${platillo.precio}`);
    });
  }
};

restaurApp.funciones.ordenar(2);
const { platillos } = restaurApp;
restaurApp.funciones.mostrarMenu(platillos);
