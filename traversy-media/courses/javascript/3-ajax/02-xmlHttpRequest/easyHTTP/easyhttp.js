// aca lo estoy manejando como si fuera una clase de ES5. (la funcion en la clase y los prototipos sus metodos)

function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let that = this;
  this.http.onload = function() {
    if (that.http.status === 200) {
      callback(null, that.http.responseText);
    } else {
      callback(`Error: ${self.http.status}`, null);
    }
  };
  this.http.send();
};

// Make an HTTP POST request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-Type', 'application/json');

  let that = this;
  this.http.onload = function() {
    callback(null, that.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};

// Make an HTTP PUT request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-Type', 'application/json');

  let that = this;
  this.http.onload = function() {
    callback(null, that.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};

// Make an HTTP DELETE request
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let that = this;
  this.http.onload = function() {
    if (that.http.status === 200) {
      callback(null, 'Post Deleted');
    } else {
      callback(`Error: ${self.http.status}`, null);
    }
  };
  this.http.send();
};
