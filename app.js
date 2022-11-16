const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();

const mainRoutes = require('./routes/mainRoutes');
const productsRoutes = require('./routes/productsRoutes');
const logMiddleware = require('./middlewares/logMiddlewares');
const publicFolderPath = path.resolve('public');


app.use(express.static(publicFolderPath));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logMiddleware);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use('/', mainRoutes);
app.use('/products', productsRoutes);

const APP_PORT = process.env.PORT || 3000;
app.listen(APP_PORT, () => {
    console.log('Servidor funcionando en puerto ' + APP_PORT)
})


module.exports = app;