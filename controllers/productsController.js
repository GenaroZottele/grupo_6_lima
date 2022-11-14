const fs = require('fs');
const path = require('path');

const productsFilePath = path.resolve('./data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 



const controller = {

    //1
    products: (req, res)=>{

        return res.render('productsDetail', {products})

    },

    //2
    create: (req, res) =>{

        return res.render('panel')
    },

    //3
    detail: (req,res) =>{
        const productId = req.params.productId;
        const productToFind = products.find((product)=> product.id == productId);

        if (productToFind == undefined) {
            return res.send("No existe el producto");
        }

        return res.render('productDetailMain', {productToFind});
    },

    //4
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
    
    //5
    /* edit: (req, res) => {
        // Obtener ID del producto
        const productId = req.params.productId;
        // Buscar producto
        const productToFind = products.find((product) => product.id == productId);
        // productToFind == undefined
        if (productToFind == undefined) {
          return res.send("No existe el producto");
        }
        return res.render("panel", {
            productToEdit: productToFind,
        });
      }, */

    edit: (req, res) =>{
        return res.render('panel')
    },
      
    //6
    update: (req, res) => {
        const dataToUpdate = req.body;        
        dataToUpdate.nombre = Number(dataToUpdate.nombre);
        dataToUpdate.base = Number(dataToUpdate.base);
        dataToUpdate.aderezo = Number(dataToUpdate.aderezo);
        dataToUpdate.ingredientes = Number(dataToUpdate.ingredientes);
        dataToUpdate.precio = Number(dataToUpdate.precio);
    
        // Obtener el indice del producto en el array productos
        // products[0] = nuevo producto 
        const productIndex = products.findIndex(
          (product) => {
            return product.id == req.params.id
          }
        )
        if (productIndex == -1) {
          return res.send('No existe el producto')
        }
        // Actualizo array en base al indice
        // Combinar producto existente con nuevos datos a actualizar
        products[productIndex] = {
          ...products[productIndex],
          ...dataToUpdate
        }
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
    
        return res.send(products[productIndex])
      },   

}

module.exports = controller;