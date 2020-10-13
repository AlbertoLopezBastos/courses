// leave only one uncommented.

const http = new easyHTTP();

// Get Posts

http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// Get Single Post

http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// Create Data
const data = {
  title: 'custom post',
  body: 'this is a custom posts'
};

// Post Posts

http.post('https://jsonplaceholder.typicode.com/posts', data, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// Update Data
const dataUp = {
  title: 'custom post',
  body: 'this is a custom posts'
};

// Update Post

http.put('https://jsonplaceholder.typicode.com/posts/1', dataUp, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// Delete Post

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
