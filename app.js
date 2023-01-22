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

//MySql
const mysql = require('mysql2')
const conexion = mysql.createConnection({
    host: "127.0.0.1",
    database: "limadb",
    user: "root",
    password: '',
    insecureAuth : true,    
});
    conexion.connect(function(error){
        if(error) throw error
        console.log('CONEXION EXITOSA')
    });
app.get('/', function(req, res){
    conexion.query('SELECT * FROM products', function(error, results, fields){
    if(error) {
        throw error;
    }else{
        res.render('index', {results: results})
        }
    });
})
app.get('/productDetail', function(req, res){
    conexion.query('SELECT * FROM products', function(error, results, fields){
    if(error) {
        throw error;
    }else{
        res.render('productDetail', {results: results})
        }
    });
})
app.get('/user', function(req, res){
    conexion.query('SELECT * FROM users', function(error, results, fields){
    if(error) {
        throw error;
    }else{
        res.render('userDetail', {results: results})
        }
    });
})
app.get('/profile', function(req, res){
    conexion.query('SELECT * FROM users', function(error, results, fields){
    if(error) {
        throw error;
    }else{
        res.render('userProfile', {results: results})
        }
    });
})
//conexion.end();

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
app.use('/user', userRoutes);


const APP_PORT = process.env.PORT || 3000;
app.listen(APP_PORT, () => {
    console.log('Servidor funcionando en puerto ' + APP_PORT)
})

module.exports = app;