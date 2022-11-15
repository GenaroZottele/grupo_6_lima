const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

// Listado de productos
router.get('/', productsController.products);

// Creacion de producto (muestra form)
router.get('/create', productsController.create);

// Accion de creacion (a donde envia form)
router.post('/', productsController.store);

 // Detail de un producto
router.get('/productDetailMain/:productId/', productsController.detail);

// Edicion productos (muestra form)
router.get('/edit', productsController.edit);

// Edicion productos (a donde envia form)
router.put('/update/:productId/', productsController.update);

// // Elimina producto
// router.post('/:id', productsController.destroy); 

module.exports = router;



