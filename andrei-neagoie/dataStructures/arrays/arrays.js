const strings = ['a', 'b', 'c', 'd'];
// 4 bytes * 4 = 16 bytes

// push
// O(1) puede ser O(n) porque si no tiene espacio en la ram 
// loopea por todos los items los copia y asigna el doble de 
// espacio en otro lado para agregar ese item

strings.push('e')

// pop 
// O(1)

strings.pop();

// unshift (insertar al principio)  
// O(n) porque tengo que cambiar los index uno por uno

strings.unshift('x')

// splice
// O (n)

strings.splice(2, 0, 'alien')





// crear mi propio array

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {}
  }


  get(index) {
    return this.data[index]
  }


  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index]; // are
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    this.pop()
  }
}


const newArray = new MyArray();
newArray.push('hello');
newArray.push('how');
newArray.push('are');
newArray.push('you');
newArray.delete(2)
console.log(newArray);

// reverse strins interview question

const reverseStr = (str) => {

  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'error'
  }

  let backArr = [];

  for (let i = str.length - 1; i >= 0; i--) {
    backArr.push(str[i]);
  }

  return backArr.join('');
}

console.log(reverseStr('Alberto Lopez Bastos'))

// merge two arrays and sort

const mergeAndSort = (arr1, arr2) => { // O(n)

  //validate arrays!!
  if (!arr1 || !arr2) {
    return 'Not Enough Params'
  }
  else if (arr1.length === 0) {
    return arr2
  }
  else if (arr2.length === 0) {
    return arr1
  }

  //merge and sort
  return [...arr1, ...arr2].sort((a, b) => {
    return a - b
  })
}

console.log(mergeAndSort([0, 3, 4, 31], [4, 6, 30]))