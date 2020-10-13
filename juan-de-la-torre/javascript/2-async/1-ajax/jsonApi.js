const cargarPosts = document.querySelector('#fetch');

cargarPosts.addEventListener('click', cargarApi);

function cargarApi(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

  xhr.onload = function() {
    if (this.status === 200) {
      const posts = JSON.parse(xhr.responseText);
      let htmlTemplate = '';
      posts.forEach(function(post) {
        htmlTemplate += `
         
            <h5>${post.title}</h5>
            <p>${post.body}</p>
         
          `;
      });

      document.getElementById('lista').innerHTML = htmlTemplate;
    }
  };

  xhr.send();
  e.preventDefault();
}
