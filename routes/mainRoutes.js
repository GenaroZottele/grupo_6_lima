const express = require('express');
const router = express.Router();
const path  = require('path');

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);

router.get('/nosotros', mainController.nosotros);

router.get('/contacto', mainController.contacto);

router.get('/productCart', mainController.productCart);

module.exports = router;
