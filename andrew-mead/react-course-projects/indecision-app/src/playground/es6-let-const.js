var nameVar = 'Beto';
nameVar = 'Kiwi';
var nameVar = 'Shila'; // this overwrites the first one
console.log('nameVar', nameVar);

let nameLet = 'Beto';
nameLet = 'Kiwi';
//let nameLet = 'Shila'; // error cant redefine;
console.log('nameLet', nameLet);

const nameConst = 'Beto';
// nameConst = 'Kiwi' // error cant reasign
// const nameConst = 'Shila'; // error cant redefine
console.log('nameConst', nameConst);

// block scoping

const fullName = 'Beto Lopez';

if (fullName) {
  let firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
