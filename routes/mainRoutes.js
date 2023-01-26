const express = require('express');
const router = express.Router();
const path  = require('path');

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);

router.get('/nosotros', mainController.nosotros);

router.get('/contacto', mainController.contacto);

router.get('/productCart', mainController.productCart);

// LAS RUTAS QUE SIGUEN TIENEN QUE PASAR AL userRoutes

router.get('/register', mainController.register);

router.post('/register', mainController.register);

router.get('/login', mainController.login);

router.post('/login', mainController.login);

router.get('/profile', mainController.profile);

router.post('/profile', mainController.profile);

router.get('/userDetail', mainController.userDetail);

module.exports = router;
