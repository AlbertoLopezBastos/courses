let calc = 0;
// memoization (cachear data para no calcular de nuevo)
function fibonacciMaster() {

  let cache = {};

  return function fib(n) {

    if (cache[n]) {
      return cache[n];
    }
    else {
      calc++;
      if (n < 2) {
        return n;
      }
      return cache[n] = fib(n - 1) + fib(n - 2);
    }
  }
}



const dynaFibo = fibonacciMaster();
console.log(dynaFibo(1476), calc)

