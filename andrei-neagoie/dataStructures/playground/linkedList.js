class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.lenght = 0;
  }

  // agrego al final
  append(value) {

    const newNode = new Node(value);

    if (!this.head) {
      this.head = this.tail = newNode;

    }

    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.lenght++;
    return this;

  }
  // agrego al principio
  prepend() { }

  // viajo hasta cierto indice y devuelve el nodo
  traverseToIndex() { }

  // elimino un nodo
  remove() { }

  // inserto un nodo en cualquier indice
  insert() { }

  // doy vuelta la linked list
  revert() { }

  // imprimo la lista en formato legible
  printList() { }

}



const myLinkedList = new LinkedList();
myLinkedList.append(5);
myLinkedList.append(10);
console.log(myLinkedList)