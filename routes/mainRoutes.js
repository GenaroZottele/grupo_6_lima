const express = require('express');
const router = express.Router();



const path  = require('path');

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);

router.get('/register', mainController.register);

router.post('/register', mainController.register);

router.get('/login', mainController.login);

router.get('/productCart', mainController.productCart);

router.get('/productDetail', mainController.productDetail);

router.get('/contacto', mainController.contacto);

router.get('/nosotros', mainController.nosotros);

router.get('/productDetailMain', mainController.productDetailMain)

router.get('/create', mainController.create);

router.get('/edit', mainController.edit);

router.put('/edit', mainController.edit);



module.exports = router;
