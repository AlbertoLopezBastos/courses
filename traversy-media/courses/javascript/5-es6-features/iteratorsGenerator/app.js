// // Iterator example

// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function() {
//       return nextIndex < names.length
//         ? { value: names[nextIndex++], done: false }
//         : { done: true };
//     }
//   };
// }

// // Create an array of names

// const namesArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

// // Init iterator and pass in the names array

// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// //-----------------------------------------------------------------------------------

// // Generator Example

// function* sayNames() {
//   yield 'a';
//   yield 'b';
//   yield 'c';
// }

// const name = sayNames();

// console.log(name.next());
// console.log(name.next());
// console.log(name.next());

// //-----------------------------------------------------------------------------------
function* createIds() {
  let index = 1;

  while (true) {
    yield index++;
  }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
