const express = require('express');
const router = express.Router();
const logDBMiddleware = require('../middlewares/logDBMiddleware');
const productsController = require('../controllers/productsController');

// Listado de productos
router.get('/', productsController.products);

// Creacion de producto (muestra form)
router.get('/create', productsController.create);

// Accion de creacion (a donde envia form)
router.post('/', logDBMiddleware ,productsController.store);

 // Detail de un producto
router.get('/productDetailMain/:productId/', productsController.detail);

// Edicion productos (muestra form)
router.get('/edit', productsController.edit);

// Edicion productos (a donde envia form)
router.put('/update', productsController.update);

// // Elimina producto
// router.post('/:id', productsController.destroy); 

module.exports = router;



