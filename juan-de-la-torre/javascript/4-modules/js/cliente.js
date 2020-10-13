// exportar variables

export const nombreCliente = 'Beto';
export let ahorro = 200;

// exportar funciones

export function mostrarInformacion(nombre, ahorro) {
  return `Cliente: ${nombre} - Ahorro ${ahorro}`;
}

export function mostrarNombre(nombre) {
  return `Cliente: ${nombre}`;
}

// exportar clases

export class Cliente {
  constructor(nombre, ahorro) {
    this.nombre = nombre;
    this.ahorro = ahorro;
  }

  mostrarInformacion() {
    return `Cliente: ${this.nombre} - Ahorro ${this.ahorro}`;
  }
}
