// function inception(value) {

//   if (value === 0) {
//     console.log(value);
//     return 'done';
//   }
//   console.log(value);
//   return inception(value - 1);
// }


// console.log(inception(10))

// 1 . identificar el caso base
// 2. identificar el caso recursivo


// function findFactorialRecursive(value) {
//   if (value === 2)
//     return 2;
//   return value * findFactorialRecursive(value - 1)
// }

// function findFactorialIterative(value) {
//   let result = value;

//   for (let i = value; i > 2; i--) {
//     result *= value - 1;
//     value--;
//   }
//   return result;
// }

// console.log(findFactorialRecursive(10))
// console.log(findFactorialIterative(10))


function fibonacciIterative(n) {
  const fibo = [0, 1];
  for (let i = 0; i <= n - 2; i++) {
    fibo.push(fibo[i + 1] + fibo[i])
  }
  return fibo[n];
}

function fibonacciRecursive(n) { //(O(2^n)
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}
console.log(fibonacciIterative(41))
console.log(fibonacciRecursive(5))

// escribir traverse en tree.js