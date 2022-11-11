const express = require('express');
const path = require('path');

const app = express();

const mainRoutes = require('./routes/mainRoutes');
const productsRoutes = require('./routes/productsRoutes');

const publicFolderPath = path.resolve('public');
app.use(express.static(publicFolderPath));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use('/', mainRoutes);
app.use('/products', productsRoutes);

const APP_PORT = process.env.PORT || 3000;
app.listen(APP_PORT, () => {
    console.log('Servidor funcionando en puerto ' + APP_PORT)
})