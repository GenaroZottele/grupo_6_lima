const path = require('path');
const { body } = require('express-validator');

module.exports = [
	
	body('name').notEmpty().withMessage('Tienes que escribir un nombre')
		.isLength({ min: 4 }),
	body('description')
		.notEmpty().withMessage('Tienes que escribir una descripción')
		.isLength({ min: 20 }),	
	body('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', 'jpeg', '.png', '.gif'];
 
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		} 
		return true;
	}),
	body('status').notEmpty().withMessage('Tienes que escribir un estado')
	    .isLength({ min: 20 }),
	body('price').notEmpty().withMessage('Tienes que escribir un precio'),	    
	body('discount').notEmpty().withMessage('Tienes que escribir un descuento')
	
 ]
 
 