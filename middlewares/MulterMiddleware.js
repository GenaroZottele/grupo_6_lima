const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.resolve('/images'))         
	},
	filename: (req, file, cb) => {
		const uniqueSuffix =  Date.now();
        const fileExtension = path.extname(file.originalname);
        const newName = file.originalname.replace(fileExtension, '')
        cb(null, newName + "-" + uniqueSuffix + fileExtension);
	}
})

const uploadFile = multer({ storage });

module.exports = uploadFile;
