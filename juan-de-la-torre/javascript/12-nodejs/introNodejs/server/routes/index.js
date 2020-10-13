const express = require('express');
const router = express.Router();

module.exports = function() {
  // aca pongo get cuando es get y post cuando es post
  router.get('/', (req, res) => {
    // es render porque estoy usando pug. va el nombre del archivo sin la extension
    res.render('index');
  });
  router.get('/nosotros', (req, res) => {
    res.render('nosotros', {
      pagina: 'Sobre Nosotros'
    });
  });

  return router;
};
