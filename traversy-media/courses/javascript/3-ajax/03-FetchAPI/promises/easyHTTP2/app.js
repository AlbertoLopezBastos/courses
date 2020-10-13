const http = new EasyHttp();

// Get Users
http
  .get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Create Data for post or put

const userData = {
  name: 'Alberto',
  userName: 'Beto Lopez',
  email: 'alberto@lopez'
};

// Post Users
http
  .post('https://jsonplaceholder.typicode.com/users', userData)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Update Users
http
  .put('https://jsonplaceholder.typicode.com/users/2', userData)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Delete Users
http
  .delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));
