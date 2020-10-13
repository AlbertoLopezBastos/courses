// SINGLETON PATTERN
// Tiene miembros privados pero solo se puede instanciar una vez.

const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({ name: 'Beto' });

    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    }
  };
})();

const instanceExampleA = Singleton.getInstance();
const instanceExampleB = Singleton.getInstance();

console.log(instanceExampleA === instanceExampleB); // true, porque siempre me da la misma instancia.
