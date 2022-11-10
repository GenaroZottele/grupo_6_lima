const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

// Listado de productos
router.get('/', productsController.index);

// Creacion de producto (muestra form)
router.get('/', productsController.create);

// Accion de creacion (a donde envia form)
router.post('/', productsController.store);

// Detail de un producto
router.get('/:id/', productsController.detail);

// Edicion productos (muestra form)
router.get('/:id/', productsController.edit);

// Edicion productos (a donde envia form)
router.post('/:id/', productsController.update);

// Elimina producto
router.post('/:id', productsController.destroy);



