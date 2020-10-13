class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.top = this.bottom = newNode;
    }

    else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.isEmpty()) {
      return this;
    }

    else if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    }

    else {
      this.top = this.top.next;
    }

    this.length--;
  }

  isEmpty() {
    if (this.length === 0) {
      return true
    }
    return false;
  }
}
const myStack = new Stack();

myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');
myStack.pop();
myStack.pop();
console.log(myStack.peek())

