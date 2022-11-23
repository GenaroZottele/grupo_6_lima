const express = require('express');
const router = express.Router();
const fs = require('fs')
const path  = require('path');
const multer = require('multer');
const logDBMiddleware = require('../middlewares/logDBMiddleware');
const productsController = require('../controllers/productsController');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.resolve('../public/images/product-images'))
         },
    filename:  (req, file, cb)=>{
        const uniqueSuffix =  Date.now();
        const fileExtension = path.extname(file.originalname);
        const newName = file.originalname.replace(fileExtension, '')
        cb(null, newName + "-" + uniqueSuffix + fileExtension);
    }
    });


const upload= multer ({storage});

// Listado de productos
router.get('/', productsController.products);

// Creacion de producto (muestra form)
router.get('/create', productsController.create);

// Accion de creacion (a donde envia form)
router.post('/', upload.single("product-images") ,productsController.store);

 // Detail de un producto
router.get('/productDetailMain/:productId/', productsController.detail);

// Edicion productos (muestra form)
router.get('/edit', productsController.edit);

// Edicion productos (a donde envia form)
router.put('/update', productsController.update);

// Elimina producto
router.delete('/delete', productsController.delete); 

module.exports = router;



