// Para manipular los paths (es core, no se descarga)
const path = require('path');
// servidor Express 
const express = require('express');
// hbs (para poder configurar el path de los partials)
const hbs = require('hbs');

// llamo a utils (son funciones que hacen request a apis o bases de datos)
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');


// Express es una funcion, al llamarla te crea el server.
const app = express();


// Configuracion Static y Dynamic que ruteo y directorios -----------

// Dynamic: definimos el path de las views 
const viewsPath = path.join(__dirname, '../templates/views')
// Dynamic: definimos el path de los partials
const partialsPath = path.join(__dirname, '../templates/partials');
// Dynamic: le indicamos a express que se va a usar hbs (para crear template de html y hacerlos dinamicos con variables)
app.set('view engine', 'hbs');
// Dynamic: configuramos el nuevo path de las views
app.set('views', viewsPath);
// Dynamic: le decimos a handlebars el nuevo path de los partials
hbs.registerPartials(partialsPath);

// Static: definimos el path que sera considerado root
const publicDirPath = path.join(__dirname, '../public/');
// Static: lo seteamos en el servidor.
app.use(express.static(publicDirPath));

//-------------------------------------------------------------------

// Dynamic: en vez de send, render-----------------------------------
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Alberto Lopez'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Alberto Lopez'
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Alberto Lopez'
    })
})
// ----------------------------------------------------------------

// Static: envio send cada vez que alguien usa la url weather ya que express busca en public por ese html
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an Address'
        });
    }
    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error });
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error });
            }
            res.send({
                forecast: forecastData,
                location: location,
                address: req.query.address
            });

        });
    });
})

// para 404
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Alberto Lopez',
        errorMessage: 'Help article not found'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Alberto Lopez',
        errorMessage: 'Page not found'
    })
})

// el listen es importante para levantar express en el puerto elegido.
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});

