function persona(nombre) {
  console.log(`hola soy ${nombre}`);
}

persona('juan');

// this con implicit binding

const usuario = {
  nombre: 'Juan',
  edad: 20,
  presentacion() {
    console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} anios`);
  },
  mascota: {
    nombre: 'Shila',
    edad: 10,
    presentacion() {
      console.log(
        `Hola mi nombre es ${this.nombre} y tengo ${this.edad} anios`
      );
    }
  }
};

usuario.presentacion();

usuario.mascota.presentacion();
