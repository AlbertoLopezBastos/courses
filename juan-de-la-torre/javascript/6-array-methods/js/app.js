const autos = [
  {
    marca: 'BMW',
    modelo: 'Serie 3',
    year: 2012,
    precio: 30000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico'
  },
  {
    marca: 'Audi',
    modelo: 'A4',
    year: 2018,
    precio: 40000,
    puertas: 4,
    color: 'Negro',
    transmision: 'automatico'
  },
  {
    marca: 'Ford',
    modelo: 'Mustang',
    year: 2015,
    precio: 20000,
    puertas: 2,
    color: 'Blanco',
    transmision: 'automatico'
  },
  {
    marca: 'Audi',
    modelo: 'A6',
    year: 2010,
    precio: 35000,
    puertas: 4,
    color: 'Negro',
    transmision: 'automatico'
  },
  {
    marca: 'BMW',
    modelo: 'Serie 5',
    year: 2016,
    precio: 70000,
    puertas: 4,
    color: 'Rojo',
    transmision: 'automatico'
  },
  {
    marca: 'Mercedes Benz',
    modelo: 'Clase C',
    year: 2015,
    precio: 25000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico'
  },
  {
    marca: 'Chevrolet',
    modelo: 'Camaro',
    year: 2018,
    precio: 60000,
    puertas: 2,
    color: 'Rojo',
    transmision: 'manual'
  },
  {
    marca: 'Ford',
    modelo: 'Mustang',
    year: 2019,
    precio: 80000,
    puertas: 2,
    color: 'Rojo',
    transmision: 'manual'
  },
  {
    marca: 'Dodge',
    modelo: 'Challenger',
    year: 2017,
    precio: 40000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico'
  },
  {
    marca: 'Audi',
    modelo: 'A3',
    year: 2017,
    precio: 55000,
    puertas: 2,
    color: 'Negro',
    transmision: 'manual'
  },
  {
    marca: 'Dodge',
    modelo: 'Challenger',
    year: 2012,
    precio: 25000,
    puertas: 2,
    color: 'Rojo',
    transmision: 'manual'
  },
  {
    marca: 'Mercedes Benz',
    modelo: 'Clase C',
    year: 2018,
    precio: 45000,
    puertas: 4,
    color: 'Azul',
    transmision: 'automatico'
  },
  {
    marca: 'BMW',
    modelo: 'Serie 5',
    year: 2019,
    precio: 90000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico'
  },
  {
    marca: 'Ford',
    modelo: 'Mustang',
    year: 2017,
    precio: 60000,
    puertas: 2,
    color: 'Negro',
    transmision: 'manual'
  },
  {
    marca: 'Dodge',
    modelo: 'Challenger',
    year: 2015,
    precio: 35000,
    puertas: 2,
    color: 'Azul',
    transmision: 'automatico'
  },
  {
    marca: 'BMW',
    modelo: 'Serie 3',
    year: 2018,
    precio: 50000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico'
  },
  {
    marca: 'BMW',
    modelo: 'Serie 5',
    year: 2017,
    precio: 80000,
    puertas: 4,
    color: 'Negro',
    transmision: 'automatico'
  },
  {
    marca: 'Mercedes Benz',
    modelo: 'Clase C',
    year: 2018,
    precio: 40000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico'
  },
  {
    marca: 'Audi',
    modelo: 'A4',
    year: 2016,
    precio: 30000,
    puertas: 4,
    color: 'Azul',
    transmision: 'automatico'
  }
];

// Forma vieja
for (let i = 0; i < autos.length; i++) {
  if (autos[i].precio > 40000) {
    console.log(autos[i].marca);
  }
}

// forEach cuando solo tengo que listar cada elemento
autos.forEach(auto => console.log(auto));

// map te devuelve un array nuevo (for each no lo hace) sirve mucho en React.js
let resultado = autos.map(auto => auto);
console.log(resultado);

// filter te devuelve un array nuevo pero lo podes filtrar. (map no se filtra
let resultado2 = autos.filter(
  auto => auto.marca === 'BMW' && auto.year > '2015'
);
console.log(resultado2);

// find devuelve un array con el primer elemento que encuentre con la condicion que pusiste
let resultado3 = autos.find(auto => auto.marca === 'BMW' && auto.year > '2015');
console.log(resultado3);

// reduce toma todos los valores y devuelve un valor unico. (podes sumar todos los precios, multiplicar todos los precios, etc o los concateno sino pongo el 0)
let resultado4 = autos.reduce((total, auto) => total + auto.precio, 0);
console.log(resultado4);

// some devuelve true o false si se cumple la condicion en alguno de los valores del array
let resultado5 = autos.some(auto => auto.marca === 'BMW');
console.log(resultado5);
