const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const upload = require('../middlewares/multerMiddlewareProducts');
const validateCreateEditProduct = require('../middlewares/validateCreateEditProductMiddleware');

// Listado de productos
router.get('/', productsController.products);

// Creacion de producto (muestra form)
router.get('/create', productsController.create);

// Accion de creacion (a donde envia form)
router.post('/create', upload.single("image"), validateCreateEditProduct, productsController.save);

 // Detail de un producto
router.get('/productDetail/:id', productsController.detail);

// Edicion productos (muestra form)
router.get('/edit/:id', productsController.edit);

// Edicion productos (a donde envia form)
router.put('/edit/:id', upload.single("image"), validateCreateEditProduct, productsController.update);

// Elimina producto
router.delete('/delete/:id', productsController.delete); 

module.exports = router;



