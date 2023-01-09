const { fileLoader } = require('ejs');
const fs = require('fs');
const path = require('path');
const upload = require('../middlewares/multerMiddleware')
const productsFilePath = path.resolve('./data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 
let db = require('../models/User')

const controller = {
    //1
    products: (req, res)=>{

        return res.render('productDetail', {products})

    },

    //2
    create: (req, res) =>{

        return res.render('create');
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
        console.log(camposDeNuevoProducto)
        // asignar id a nuevo producto
        camposDeNuevoProducto.id = 'ensalada' + Date.now();
        // convertimos precio a number
        camposDeNuevoProducto.precio = Number(camposDeNuevoProducto.precio);
        camposDeNuevoProducto.imagen = '/images/'+ req.file.filename
        // pusheamos los datos al array de objetos de js
        products.push(camposDeNuevoProducto);
        // pasamos de un array de objetos de js a un objeto json y lo cargamos en el data
        fs.writeFileSync(productsFilePath, JSON.stringify(products));        
        // redirigir la pagina
        res.redirect('/create');
        
    },
    
    //5     
    edit: (req, res) =>{
      const productId = req.params.productId;
      const productToFind = products.find((product)=> product.id == productId);
      return res.render('edit/', {productToFind});
    },
      
    //6
    update: (req, res) => {     
        
        // => HACER barra de busqueda de productos para modificar

        // capturamos los datos del form
        const dataToUpdate = req.body;
        console.log(req.body);
        // convertimos precio a number
        dataToUpdate.precio = Number(dataToUpdate.precio);
        // obtenemos el id del producto
        let id = dataToUpdate.id;                
        // obtener indice del producto en el array de productos
        // products[0] = nuevo producto
        const productIndex = products.findIndex(
          (product) => {
            return product.id == id;
          })
        if (productIndex == -1) {
          return res.send('No existe el producto');
        }
        // combinamos producto existente con valores actualizados  
        products[productIndex] = {
          ...products[productIndex], ...dataToUpdate
        };   
        // pasamos de un array de objetos de js a un objeto json y lo cargamos en el data
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
        // redirigir la pagina
        res.redirect('/panel');      
      },  
      
    //7
      delete: (req, res) => {
        // capturamos los datos del form
        const dataToUpdate = req.body;
        // obtenemos el id del producto
        let id = dataToUpdate.id;
        console.log(id);
        // filtramos el producto en el array
        products = products.filter(
             (product) => product.id != id
        );
        console.log(products);
        // pasamos de un array de objetos de js a un objeto json y lo cargamos en el data
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
        // redirigir la pagina
        res.redirect('/panel'); 
      }
}

module.exports = controller;