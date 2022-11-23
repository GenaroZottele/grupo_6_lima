const path  = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'public/images')
         },
    filename:  (req, file, cb)=>{
        const uniqueSuffix =  Date.now();
        const fileExtension = path.extname(file.originalname);
        const newName = file.originalname.replace(fileExtension, '')
        cb(null, newName + "-" + uniqueSuffix + fileExtension);
    }
    });


const upload= multer ({storage});

module.exports= upload