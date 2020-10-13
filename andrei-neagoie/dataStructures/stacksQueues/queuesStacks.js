class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.last = this.first = newNode;
    }

    else if (this.length === 1) {
      this.first.next = this.last = newNode;
    }

    else {
      this.last = this.last.next = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) {
      return this;
    }
    else if (this.length === 1) {
      this.first = this.last = null;
    }

    else {
      this.first = this.first.next;
    }

    this.length--;
    return this;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myQueue = new Queue();
myQueue.enqueue('beto');
myQueue.enqueue('kiwi');
myQueue.enqueue('neni');
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.peek())

// implementar queues usando stacks (preferentemente stacks de arrays)



class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    return this.array.push(value);
  }

  pop() {
    return this.array.pop();
  }
  isEmpty() {
    if (this.array.length === 0) {
      return true
    }
    return false;
  }
}
const myStack = new Stack()
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
//myStack.pop();
//myStack.pop();
//myStack.pop();
console.log(myStack.peek());