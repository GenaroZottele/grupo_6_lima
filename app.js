const express = require('express');
const path = require('path');

const app = express();

const mainRoutes = require('./routes/mainRoutes');

const publicFolderPath = path.resolve('public');
app.use(express.static(publicFolderPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use('/', mainRoutes);

const APP_PORT = process.env.PORT || 3000;
app.listen(APP_PORT, () => {
    console.log('Servidor funcionando en puerto ' + APP_PORT)
})