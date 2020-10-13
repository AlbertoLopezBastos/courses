// event loop

console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

console.log('3');

setTimeout(() => {
  console.log('4');
}, 0);

// Promise tiene job queue (mayor prioridad que el task queue)
var i = false;

new Promise(function(resolve, reject) {
  if (i) {
    resolve('Yo soy un resolve');
  } else {
    reject('Yo soy un reject');
  }
})
  .then(console.log) // si es resolve
  .catch(console.log); // si es reject

console.log('5');
