

// ------------------------------------------------------------
// O(n) --> el laburo aumenta proporcionalmente al input

const everyone = ['nemo', 'dory', 'bruce', 'marlin', 'squirt', 'gill', 'bloat', 'darla', 'hank', 'nigel'];
const large = new Array(100).fill('nemo')
function findNemo(array) {
  console.time('measure')
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!')

    }
  }
  console.timeEnd('measure')
}

findNemo(large) //O(n) --> Linear TIme



// ---------------------------------------------------------
// O(1)    --> no importa el tamaño input siempre voy a laburar la misma cantidad.

function compressFirstBox(array) {
  console.log(array[0])
} // 0(1) --> constant time


// O(log n) --> cuantas decisiones tengo que tomar para llegar al fondo del tree (divide and conquer)

// es un binary tree perfecto como siempre tiene los dos hijos se puede calcular cuantos nodos hay haciendo
// level 0: 2^0 = 1
// level 1: 2^1 = 2
// level 2: 2^2 = 4
// level 3: 2^3 = 8

// para determinar la cantidad de nodos que tiene un arbol perfecto tengo que hacer 2^altura - 1
// 2^3 = 8 
// 8 - 1 = 7 (cantidad de nodos que tiene un arbol perfecto de 3 niveles)