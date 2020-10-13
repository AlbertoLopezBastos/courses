//  // object destruct

// console.log('destructuring')

// const person = {
//     name: 'Beto',
//     age: 26,
//     location: {
//         city: 'Moron',
//         temp: 20
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { temp: temperatura, city } = person.location;

// if (city && temperatura) {
//     console.log(`Its ${temperatura} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(`${publisherName}`)


// array destruct

const address = ['645 berutti', 'Moron', 'Buenos Aires', '1708'];

const [, city, province = 'Buenos aires'] = address;

console.log(`you are in ${city} ${province}`)

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];

const [name, , medium] = item;

console.log(`A medium ${name} costs ${medium}`)