const { cadenaConexion } = require('./backend/config/db');
var express = require('express')
const mongoose = require('mongoose')
var app = express();
const path = require('path');
const body_parse = require('body-parser');
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(body_parse.urlencoded({ extended: false }));
app.use(body_parse.json({ limit: '50mb' }));

// colocar en public las carpetas de style y script
app.use('/public', express.static(path.join(__dirname, '/public')));

//archivo  donde estaran todas las peticiones de cada servicio
app.use(require('./backend/peticiones/router'));

app.get('/', (req, res) => {
    res.render('home')

});

app.get('/contactenos', (req, res) => {
    res.render('contact')
});
let url = cadenaConexion();
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true },
    (err, res) => {
        if (err) throw err;
        console.log('Conectada DB');
    });

app.listen(port, () => {
    console.log(`   PUERTO  ${port}`);
});