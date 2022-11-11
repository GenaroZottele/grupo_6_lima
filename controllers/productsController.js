const fs = require('fs');
const path = require('path');

const productsFilePath = path.resolve('./data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {

    products: (req, res)=>{

        return res.render('productsDetail', {products})

    },

    create: (req, res) =>{

        return res.render('panel')
    },

    store: (req,res) =>{
        // capturamos los datos del form
        const camposDeNuevoProducto = req.body;
        // pusheamos los datos al array de objetos de js
        products.push(camposDeNuevoProducto);
        // pasamos de un array de objetos de js a un objeto json y lo cargamos en el data
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
        return res.send(camposDeNuevoProducto)
    },

}