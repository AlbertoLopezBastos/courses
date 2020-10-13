function addTo80(n) {
  console.log('long time')
  return 80 + n;
}


// muy buena la del cache 
function memoizedAddTo80() {
  let cache = {};
  return function (n) {
    if (cache[n]) {
      return cache[n];
    }

    else {
      console.log('long time')
      cache[n] = n + 80;
      return cache[n];
    }
  }
}

// al llamar la funcion ejecutada tengo la variable inicializada y en memoria.
const memoized = memoizedAddTo80();
console.log(memoized(5))
console.log(memoized(5))
console.log(memoized(5))