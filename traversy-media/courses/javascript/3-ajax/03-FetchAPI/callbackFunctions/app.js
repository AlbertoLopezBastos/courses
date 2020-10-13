const posts = [
  {
    title: 'post one',
    body: 'this is post one'
  },

  {
    title: 'post two',
    body: 'this is post two'
  }
];

function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 1001);
}
function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: 'post three', body: 'this is post 3' }, getPosts);
