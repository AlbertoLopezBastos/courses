// la lista enlazada, de puntero a puntero. esta entre el hashtable y el array
// Se parece al array en que es ordenado, y lo tenes que traversear uno por uno
// es mejor porque podes meter cosas en el medio sin tener que cambiar todos los index ,aunque igual es 0(N)
// es pero porque no tiene un acceso directo onda array[5], siempre tenes que traversear

// se parece al hash en que sus datos no estan consecutivos en memoria, sino qeu estan asignados por todos lados
// es mejor que el hash porque podes tener un orden
// es peor que el hash porque no tenes un acceso directo onda hash['peras']

// en que caso usarlos?

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 6,
//         next: null
//       }
//     }
//   }
// }

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class LinkedList {

  constructor(value) {
    this.head = {
      value,
      next: null
    }

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }

  prepend(value) {
    const newNode = new Node(value, this.head);

    this.head = newNode;
    this.length++;
    return this.printList();
  }

  createNode(value) {
    return {
      value,
      next: null
    }
  }

  traverseToIndex(index) {
    let node = this.head;

    while (--index) {
      node = node.next;
    }
    return node;
  }

  remove(index) {
    let previousNode = this.traverseToIndex(index);
    previousNode.next = previousNode.next.next;
    this.length--;
    return this.printList();
  }

  insert(index, value) {

    if (index === 0) {
      return this.prepend(value)
    }

    // si se opta por insertar en un indice mayor al length, entonces inserto al final con append
    if (index >= this.length) {
      return this.append(value)
    }

    let previousNode = this.traverseToIndex(index);
    const newNode = new Node(value, previousNode.next);
    previousNode.next = newNode;
    this.length++;
    return this.printList();
  }

  reverse() {
    //si es un dato solo no hay nada que revertir
    if (this.length === 1) {
      return this;
    }

    // tomo el primero y el segundo y ya le digo al tail que va a ser el primero.
    let first = this.head;
    this.tail = this.head;
    let second = first.next;


    // tomo el next del considerado segundo. y hago el loopeo.
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    // el next del head se hace null ya que el es el ultimo y luego el head pasa a ser el ultimo (que se encuentra como referencia en la  variable first)
    this.head.next = null;
    this.head = first;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next;
    }
    console.log(array)
    return array;
  }
}

const myLinkedList = new LinkedList(2);
myLinkedList.append(3);
myLinkedList.append(5);
myLinkedList.prepend(1);
myLinkedList.insert(3, 4);
myLinkedList.remove(4);
myLinkedList.reverse();
myLinkedList.printList()

// agarrar el hash table y ponerle lindkedlist 