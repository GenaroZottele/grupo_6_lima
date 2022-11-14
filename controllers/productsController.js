const fs = require('fs');
const path = require('path');

const productsFilePath = path.resolve('./data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 



const controller = {

    products: (req, res)=>{

        return res.render('productDetail', {products})

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
        return res.send(req.file)
        // 1)asignar id unico --------------------------------------------
        // 2)redirigir la pagina ----------------------------------------
        // 3)actualizar campos form----------------------------------------
    },
    detail: (req,res) =>{
        const productId = req.params.productId;
        const productToFind = products.find((product)=> product.id == productId);

        if (productToFind == undefined) {
            return res.send("No existe el producto");
        }

        return res.render('productDetailMain', {productToFind});

    },
}

module.exports = controller;