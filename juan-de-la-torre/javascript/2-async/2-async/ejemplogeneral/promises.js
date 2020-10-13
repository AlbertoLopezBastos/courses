// Promises

// Prometo hacer algo que tal vez falle
const esperando = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('Se ejecuto');
  }, 5000);
});

esperando
  .then(function(msg) {
    console.log(msg);
  })
  .catch(function(msg) {
    console.log(msg);
  });

// simulo el fallo o exito de un promise
const aplicarDescuento = new Promise(function(resolve, reject) {
  const descuento = true; // cambiar a false.

  if (descuento) {
    resolve('todo ok');
  } else {
    reject('todo mal');
  }
});

aplicarDescuento
  .then(function(msg) {
    console.log(msg);
  })
  .catch(function(error) {
    console.log(error);
  });
