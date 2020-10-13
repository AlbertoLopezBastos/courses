// Tambien se le conoce como suscriptor publicador

let observer = {
  obtenerOfertas: function(callback) {
    if (typeof callback === 'function') {
      this.subscribers[this.subscribers.length] = callback;
    }
  },

  cancelarOfertas: function(callback) {
    for (let i = 0; i < this.subscribers.length; i++) {
      if (this.subscribers[i] === callback) {
        delete this.subscribers[i];
      }
    }
  },

  publicarOferta: function(oferta) {
    for (let i = 0; i < this.subscribers.length; i++) {
      if (typeof this.subscribers[i] === 'function') {
        this.subscribers[i](oferta);
      }
    }
  },

  crear: function(objeto) {
    for (let i in this) {
      if (this.hasOwnProperty(i)) {
        objeto[i] = this[i];
        objeto.subscribers = [];
      }
    }
  }
};

// Vendedores
const udemy = {
  nuevoCurso: function() {
    const curso = 'Curso de Javascript';
    this.publicarOferta(curso);
  }
};

const facebook = {
  nuevoAnuncio: function() {
    const oferta = 'compra un celular';
    this.publicarOferta(oferta);
  }
};

// Publicadores

observer.crear(udemy);
observer.crear(facebook);

//

const beto = {
  compartir: function(oferta) {
    console.log(`Beto Dice: Excelente la oferta de ${oferta}`);
  }
};

const kiwi = {
  interesa: function(oferta) {
    console.log(`Kiwi Dice: Me interesa la oferta de ${oferta}`);
  }
};

udemy.obtenerOfertas(beto.compartir);
udemy.obtenerOfertas(kiwi.interesa);
udemy.cancelarOfertas(kiwi.interesa);
udemy.nuevoCurso();

facebook.obtenerOfertas(kiwi.interesa);
facebook.nuevoAnuncio();
