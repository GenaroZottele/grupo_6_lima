const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const mainRoutes = require('./routes/mainRoutes');
const productsRoutes = require('./routes/productsRoutes');
const logMiddleware = require('./middlewares/logMiddleware');
const publicFolderPath = path.resolve('public');
const methodOverrride = require('method-override');

app.use(express.static(publicFolderPath));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logMiddleware);

app.use(methodOverrride('_method'));

app.set('view engine', 'ejs');

app.use('/', mainRoutes);
app.use('/products', productsRoutes);

const APP_PORT = process.env.PORT || 3000;
app.listen(APP_PORT, () => {
    console.log('Servidor funcionando en puerto ' + APP_PORT)
})


module.exports = app;