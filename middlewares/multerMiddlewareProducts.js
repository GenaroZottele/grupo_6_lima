const path  = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname, '../public/images/products'));
    },
    filename:  (req, file, cb)=>{
        let fileName = file.originalname;
        cb(null, fileName)
    }
    });

const upload = multer ({ storage: storage });

module.exports = upload