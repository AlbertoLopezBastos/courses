// object property shorthand

// const name = 'Beto';
// const userAge = 33;

// const user = {
//     name,
//     age: userAge,
//     location: 'Moron'
// }


// console.log(user);


// object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4
}


// const label = product.label;
// const stock = product.stock;

// const { label: label2, stock, rating = 5 } = product;

// console.log(label2, stock, rating);




const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock);
}


transaction('order', product)