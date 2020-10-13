// importo de otro js

import { Cliente } from './cliente.js';

// exportar variables

export const nombreEmpresa = 'Udemy';
export let ahorro = 20000000;
export const categoria = 'Aprendizaje';

// exportar funciones

export function mostrarInformacion(nombre, ahorro, categoria) {
  return `Cliente: ${nombre} - Ahorro ${ahorro} - Categoria ${categoria}`;
}

// exportar clases que extienden de otro js

export class Empresa extends Cliente {
  constructor(nombre, ahorro, categoria) {
    super(nombre, ahorro);
    this.categoria = categoria;
  }

  mostrarInformacion() {
    return `Cliente: ${this.nombre} - Ahorro ${this.ahorro} Categoria:$ ${this.categoria}`;
  }
}
