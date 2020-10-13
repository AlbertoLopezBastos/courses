// SETS -  Store unique values of any type

const set1 = new Set();

// Add values to set

set1.add(100);
set1.add('A string');
set1.add({ name: 'John' });
set1.add(true);
set1.add(function() {});

// const set2 = new Set([1, 'hello', true, function() {}, { name: 'object' }]);

// console.log(set1);
// console.log(set2);

// // get count
// console.log(set1.size);

// // Check for values
// console.log(set1.has(100));
// console.log(set1.has(50 + 50));
// console.log(set1.has({ name: 'John' })); // dont work

// console.log({ name: 'John' } === { name: 'John' }); // false es un reference value not primitive

// // Delete from the set

// set1.delete(100);

// console.log(set1);

// iterating through sets

// // for of
// for (let item of set1) {
//   console.log(item);
// }

// // for each

// set1.forEach(item => {
//   console.log(item);
// });

// convert set to array

const setArray = Array.from(set1);

console.log(setArray);
