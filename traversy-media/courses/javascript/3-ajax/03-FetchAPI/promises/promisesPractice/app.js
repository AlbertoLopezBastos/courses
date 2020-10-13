// Data

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

// Function Create Posts
function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);
      // cambiar el err a false para testear el reject
      const err = false;

      if (err) {
        reject('Error: Something went wrong');
      } else {
        resolve();
      }
    }, 2000);
  });
}

// Function Get Posts
function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// Program

createPost({ title: 'Post Three', body: 'This is post three' })
  .then(getPosts)
  .catch(function(err) {
    console.log(err);
  });
