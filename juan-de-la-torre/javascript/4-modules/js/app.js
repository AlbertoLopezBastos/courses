// importo variables, funciones y clases de otro js

import {
  nombreCliente,
  ahorro,
  mostrarInformacion,
  mostrarNombre,
  Cliente
} from './cliente.js';
import {
  nombreEmpresa,
  ahorro as ahorroEmpresa,
  mostrarInformacion as mostrarInformacionEmpresa,
  categoria,
  Empresa
} from './empresa.js';
//import * as cliente from './cliente.js';

// ahora los puedo usar
const info = mostrarInformacion(nombreCliente, ahorro);

const info2 = mostrarNombre('Pepe');

let cliente1 = new Cliente('Alberto', 500);

let empresa2 = new Empresa('EmpresaZarpada', 500, 'A');
