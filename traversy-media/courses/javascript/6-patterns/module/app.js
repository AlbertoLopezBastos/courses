// Se crea una funcion que adentro es similar a una clase.
// Tiene variables y funciones, que seran privadas e inaccesibles desde afuera.
// lo que ponga en return, sera lo accesible desde afuera, las variables y miembros publicos.

// // Estructura Basica (template)

// (function() {
//   // Declare PRIVATE vars and functions
//   let text = 'Hello World';

//   const privateFunction = function(){
//    console.log('soy una funcion privada y no puedo ser llamada desde afuera');
//   }

//   return {
//     // Declare PUBLIC var and functions
//     callPublicFunction : function {
//     console.log('soy una funcion publica y puedo ser llamada desde afuera');
//     },

//     callPublicFunction2 : function {
//     privateFuction();
//      console.log('pero puedo ser llamada desde una funcion publica. ')
//     }
//   };
// })();
// const example = publicFunctionFromReturn();

// STANDARD MODULE PATTERN

const UICtrl = (function() {
  let text = 'Hello World';

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  };

  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  };
})();

// UICtrl.changeText();  No se puede hacer porque es privada
UICtrl.callChangeText(); // pero esta si porque es la publica, que llama a la privada.

// REVEALING MODULE PATTERN

// Este patron es muy parecido al anterior pero en este caso el return revela las funciones privadas haciendolas publicas. Lo cual para mi no tiene sentido porque para que las querias privadas desde un principio.

const ItemCtrl = (function() {
  let _data = [];

  function add(item) {
    _data.push(item);
    console.log('Item Added...');
  }

  function get(id) {
    return _data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  };
})();

ItemCtrl.add({ id: 1, name: 'John' });
ItemCtrl.add({ id: 2, name: 'Beto' });
console.log(ItemCtrl.get(1));
console.log(ItemCtrl.get(2));
