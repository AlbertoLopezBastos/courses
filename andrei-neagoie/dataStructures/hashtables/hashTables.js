let user = {
  age: 54,
  name: 'kylie',
  magic: true,
  scream: function () {
    console.log('Ahhhhhh!')
  }
}

//.log(user.age) // O(1)
//user.spell = 'abra kadabra'; // O(1)
//user.scream(); // O(1)

// cuando vos vas insertando datos en un objeto (hashtable) se hashean y se asignan a un address en memoria, pero es muy probable que 
// se vaya repitiendo ese address y se acumulen varios datos en un mismo address. Esto se llama colision.
// para no pisar el dato anterior se hace como un puntero en ese mismo address (una linked list) 
// lo que genera que al insertar, o mirar, empiece a haber loopeo para saber donde ubicar lo nuevo y ahi es O(n)
// hay formas de resolver las colisiones, pero neh.

// un map es un objeto cuya key no tiene que ser si o si string, puede ser una funcion, un array etc, ademas mantiene el orden de insercion
// un set es un objeto que solamente tiene keys. no hay valores.


// hacer un hastable

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) %
        this.data.length;
    }

    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);

  }

  get(key) {
    const address = this._hash(key);
    const currentAddress = this.data[address];

    if (currentAddress) {
      return currentAddress.find(element => element[0] === key)[1];
    }
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0])
      }
    }

    return keysArray
  }

}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 10);
myHashTable.set('oranges', 89);
myHashTable.set('bananas', 54);
myHashTable.set('kiwis', 35);
//console.log(myHashTable.keys())

// interview question for hash tables
// esta bien hecho, pero yo use array no conviene porque se me va a 0^n, en el curso me mostraron que conviene mas un hashtable (objeto)
// pero conviene aun mas un hash set (set)
const recurringItem = arr => {
  const newArr = [arr[0]];
  let repeated = undefined;

  for (let i = 1; i < arr.length; i++) {
    repeated = newArr.find((item) => {
      return item == arr[i];
    })

    if (repeated !== undefined) {
      return repeated;
    }
    else {
      newArr.push(arr[i]);
    }
  }

  return repeated;
} // O(n^2)

const recurringItem2 = arr => {
  let map = {}

  for (let i = 0; i < arr.length; i++) {

    if (map[arr[i]] !== undefined) {
      return arr[i];
    }
    else {
      map[arr[i]] = true
    }
  }

  return undefined;
} // O(n)

// los objetos me sirven cuando quiero ir llenando una segunda estructura e ir comparandola, si fuera array tendria que loopearla, aca acceso directo.

console.log(recurringItem2([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(recurringItem2([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(recurringItem2([2, 3, 4, 5]));
console.log(recurringItem2([0, 0, 1, 6, 3, 7, 9, 4, 2]));