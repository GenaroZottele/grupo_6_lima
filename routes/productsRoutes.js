const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

// Listado de productos
router.get('/', productsController.index);

// Creacion de producto (form)
router.get('/', productsController.create);

// Accion de creacion 
router.post('/', productsController.store);

// Detail de un producto
router.get('/:id/', productsController.detail);


