// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = true;

//   if (error) {
//     await Promise.reject(new Error('Something went wrong'));
//   } else {
//     const res = await promise; // Wait until promise is resolved.
//     return res;
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

async function getUsers(url) {
  // Await the response of the fetch call
  const response = await fetch(url);

  // Only proceed once its resolved.
  const data = await response.json();

  // Only proceed one second promise is resolved
  return data;
}

getUsers('https://jsonplaceholder.typicode.com/users')
  .then(users => console.log(users))
  .catch(err => console.log(err));
