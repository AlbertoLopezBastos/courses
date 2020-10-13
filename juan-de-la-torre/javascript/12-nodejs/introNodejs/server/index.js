// Importar express (para que exista hice un npm install --save express)
const express = require('express');
// importar las rutas que estan en la carpeta routes
const routes = require('./routes');
// Le damos a Express la capacidad de recorrer el directorio
const path = require('path');
// importo el archivo de configuraciones donde determino diff entre dev y prod
configs = require('./config');

// Configurar Express
const app = express();

// validar si estamos en dev o pro
const config = configs[app.get('env')];

//creamos la variable para el sitio web
app.locals.titulo = config.nombresitio;

// Habilitar pug ( si o si despues del app)
app.set('view engine', 'pug');
// Le decimos en que carpeta va a encontrar los templates
// __dirname = la carpeta actual en la que estamos.
app.set('views', path.join(__dirname, './views'));

//cargar una carpeta estatica llamada public
app.use(express.static('public'));

// Muestra el a;o actual
app.use((req, res, next) => {
  const fecha = new Date().getFullYear();

  res.locals.fechaActual = fecha;
  return next();
});

//  app.use para responder a cualquiera de los metodos que tenga routes
app.use('/', routes());
app.listen(3000);
