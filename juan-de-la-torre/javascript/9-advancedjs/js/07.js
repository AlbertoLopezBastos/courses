// Classes y prototypes ES5

function Playlist(nombre) {
  this.nombre = nombre;
}

Playlist.prototype.play = function() {
  console.log(`Reproduciendo la playlist ${this.nombre}`);
};
Playlist.prototype.eliminar = function() {
  console.log(`Eliminando la playlist ${this.nombre}`);
};

const playlist = new Playlist('Rock 90s');
const playlist2 = new Playlist('Punk 90s');

console.log(playlist);
console.log(playlist2);

playlist.play();
playlist.eliminar();

playlist2.play();
playlist2.eliminar();

// CLASES ES5
class Playlist2 {
  constructor(nombre) {
    this.nombre = nombre;
  }

  play() {
    console.log(`Reproduciendo la playlist ${this.nombre}`);
  }
  eliminar() {
    console.log(`Eliminando la playlist ${this.nombre}`);
  }
}
const playlist3 = new Playlist2('Funky 90s');
const playlist4 = new Playlist2('Pop 90s');

playlist3.play();
playlist3.eliminar();

playlist4.play();
playlist4.eliminar();

// herencia via protoypes ES5

function Playlist3(nombre) {
  this.nombre = nombre;
}

Playlist.prototype.play = function() {
  console.log(`Reproduciendo la playlist ${this.nombre}`);
};
Playlist.prototype.eliminar = function() {
  console.log(`Eliminando la playlist ${this.nombre}`);
};

/* herencia */

function Cancion(nombre, genero) {
  // aca pido las propeerties
  Playlist.call(this, nombre);
  this.genero = genero;
}

// aca pido los prototipes
Cancion.prototype = Object.create(Playlist.prototype);

const cancion = new Cancion('Nothing Else Matters', 'Heavy Metal');

cancion.play();
