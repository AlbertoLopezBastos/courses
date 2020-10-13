

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