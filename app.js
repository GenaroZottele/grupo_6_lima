const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const session = require('express-session');
const methodOverrride = require('method-override');

//middlewares
const logMiddleware = require('./middlewares/logMiddleware');
//const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

//routes
const mainRoutes = require('./routes/mainRoutes');
const productsRoutes = require('./routes/productsRoutes');
const userRoutes = require('./routes/userRoutes');

//Template engine
app.set('view engine', 'ejs');

//Session
app.use(session({
    secret: 'Lima',
    resave: false,
    saveUninitialized: false,
}));

app.use(cookieParser());

//app.use(userLoggedMiddleware);
app.use(logMiddleware);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverrride('_method'));
const publicFolderPath = path.resolve('public');
app.use(express.static(publicFolderPath));

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/users', userRoutes);


const APP_PORT = process.env.PORT || 3000;
app.listen(APP_PORT, () => {
    console.log('Servidor funcionando en puerto ' + APP_PORT)
})

module.exports = app;