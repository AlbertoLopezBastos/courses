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
  constructor(value, next, prev) {
    this.value = value;
    this.next = next || null;
    this.prev = prev || null;
  }
}

class DoublyLinkedList {

  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null
    }

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value, null, this.tail);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }

  prepend(value) {
    const newNode = new Node(value, this.head, null);
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    let node = this.head;

    if (index === 0) {
      return node;
    }

    while (--index) {
      node = node.next;
    }

    return node;
  }

  insert(index, value) {

    // si se quiere insertar al principio llamo a prepend
    if (index === 0) {
      return this.prepend(value)
    }

    // si se opta por insertar en un indice mayor al length, entonces inserto al final con append
    if (index >= this.length) {
      return this.append(value)
    }

    let previousNode = this.traverseToIndex(index);
    let nextNode = previousNode.next;

    const newNode = new Node(value, nextNode, previousNode);

    nextNode.prev = previousNode.next = newNode;

    this.length++;
    return this.printList();
  }

  remove(index) {
    let previousNode = this.traverseToIndex(index);

    if (previousNode) {
      let nextNode = previousNode.next.next;

      if (nextNode) {
        nextNode.prev = previousNode;
        previousNode.next = nextNode;
      }
      else {
        previousNode.next = null;
      }
    }

    else {
      this.head = previousNode.next;
      this.head.prev = null;
    }

    this.length--;
    return this.printList();
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

const myLinkedList = new DoublyLinkedList(2);
myLinkedList.append(3);
myLinkedList.append(5);
myLinkedList.prepend(1);
myLinkedList.insert(3, 4);
myLinkedList.remove(0);
myLinkedList.printList();