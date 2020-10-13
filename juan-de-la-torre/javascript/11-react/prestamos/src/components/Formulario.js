import React, { useState, Fragment } from 'react';
import { calcularTotal } from '../helpers.js';

const Formulario = props => {
  //definir State

  const {
    cantidad,
    guardarCantidad,
    plazo,
    guardarPlazo,
    guardarTotal,
    guardarCargando
  } = props;
  const [error, guardarError] = useState(false);

  // Cuando el usuario hace Submit
  const calcularPrestamo = e => {
    e.preventDefault();

    // Validar
    if (cantidad === 0 || isNaN(cantidad) || plazo === '' || isNaN(plazo)) {
      guardarError(true);
    } else {
      guardarError(false);
      guardarCargando(true);
      setTimeout(() => {
        // Realizar la cotizacion
        const total = calcularTotal(cantidad, plazo);

        // una vez calculado, guardadrTotal
        guardarTotal(total);
        guardarCargando(false);
      }, 1500);
    }
  };

  return (
    <Fragment>
      <form onSubmit={calcularPrestamo}>
        {cantidad}
        {plazo}
        <div className='row'>
          <div>
            <label>Cantidad Prestamo</label>
            <input
              className='u-full-width'
              type='number'
              placeholder='Ejemplo: 3000'
              onChange={e => {
                guardarCantidad(parseInt(e.target.value));
              }}
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select
              className='u-full-width'
              onChange={e => {
                guardarPlazo(parseInt(e.target.value));
              }}
            >
              <option value=''>Seleccionar</option>
              <option value='3'>3 meses</option>
              <option value='6'>6 meses</option>
              <option value='12'>12 meses</option>
              <option value='24'>24 meses</option>
            </select>
          </div>
          <div>
            <input
              type='submit'
              value='Calcular'
              className='button-primary u-full-width'
            />
          </div>
        </div>
      </form>
      {error ? (
        <p className='error'>Todos los campos son obligatorios</p>
      ) : null}
    </Fragment>
  );
};

export default Formulario;
