const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.index);

router.get('/register', mainController.register);

router.get('/login', mainController.login);

router.get('/productCart', mainController.productCart);

router.get('/productDetail', mainController.productDetail);

router.get('/contacto', mainController.contacto);

router.get('/nosotros', mainController.nosotros);

router.get('/productDetailMain', mainController.productDetailMain)

router.get('/panel', mainController.panel);

module.exports = router;
