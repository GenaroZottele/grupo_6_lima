const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const mainRoutes = require('./routes/mainRoutes');
const productsRoutes = require('./routes/productsRoutes');
const userRoutes = require('./routes/userRoutes');

const logMiddleware = require('./middlewares/logMiddleware');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
const publicFolderPath = path.resolve('public');
const session = require('express-session');
const methodOverrride = require('method-override');

app.use(express.static(publicFolderPath));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logMiddleware);


app.use(methodOverrride('_method'));

//Session
app.use(session({
    secret: 'IFTS 30',
    resave: false,
    saveUninitialized: false,
}));
//Siempre va despuúes de session
app.use(userLoggedMiddleware);

app.set('view engine', 'ejs');

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/user', userRoutes);

const APP_PORT = process.env.PORT || 3000;
app.listen(APP_PORT, () => {
    console.log('Servidor funcionando en puerto ' + APP_PORT)
})


module.exports = app;