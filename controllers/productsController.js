const { fileLoader } = require('ejs');
const fs = require('fs');
const path = require('path');
const upload = require('../middlewares/multerMiddleware'); 
const db = require('../src/database/models/index');

const controller = {  

    products: (req, res)=>{        
    db.Product.findAll()
      .then(function(products){
        return res.render('productDetail', {products: products});
      });
    },
    create: function (req, res) {        
        return res.render('create');
    },
    save: function (req, res){      
      db.Product.create({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        status: req.body.status,
        price: req.body.price,
        discount: req.body.discount
      });
        res.redirect('../productDetail')
    },
    
    detail: (req, res) =>{
      db.Product.findByPk(req.params.id)
        .then(function(products) {
          return res.render('productDetailMain', {products: products});
        })
      },
    
    edit: (req,res) => {
        return res.render('edit');
    },

    edit2: (req, res) => {  
      console.log(req.params.id);  
      db.Product.findByPk(req.params.id)      
        .then(function(product) {
        return res.render('/edit', {product:product});
      })
    },
  
    update: (req, res) => {  
      db.Product.update({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        status: req.body.status,
        price: req.body.price,
        discount: req.body.discount
      }, {
        where: {
          id: req.body.id
        } 
      });
        res.redirect('/products' + req.params.id)
    },

    delete: (req, res) => {
      db.Product.destroy({
        where: {
          id: req.params.id
        }
      })
      res.redirect('/products');
    }}

    module.exports = controller;


      // capturamos los datos del form
      //const dataToUpdate = req.body;
      // obtenemos el id del producto
      //let id = dataToUpdate.id;
      //console.log(id);
      // filtramos el producto en el array
      //products = products.filter(
      //   (product) => product.id != id
      //);
      //console.log(products);
      // pasamos de un array de objetos de js a un objeto json y lo cargamos en el data
      //fs.writeFileSync(productsFilePath, JSON.stringify(products));
      // redirigir la pagina
      //res.redirect('/panel'); 
    //}
//}

        // => HACER barra de busqueda de productos para modificar

        // capturamos los datos del form
        //const dataToUpdate = req.body;
        //console.log(req.body);
        // convertimos precio a number
        //dataToUpdate.precio = Number(dataToUpdate.precio);
        // obtenemos el id del producto
        //let id = dataToUpdate.id;                
        // obtener indice del producto en el array de productos
        // products[0] = nuevo producto
        //const productIndex = products.findIndex(
        //  (product) => {
        //    return product.id == id;
        //  })
       // if (productIndex == -1) {
       //   return res.send('No existe el producto');
//}
        // combinamos producto existente con valores actualizados  
        //products[productIndex] = {
        //  ...products[productIndex], ...dataToUpdate
        //};   
        // pasamos de un array de objetos de js a un objeto json y lo cargamos en el data
        //fs.writeFileSync(productsFilePath, JSON.stringify(products));
        // redirigir la pagina
        //res.redirect('/panel');      
      
    //SI FUNCIONA SAVE ELIMINAR
    //store: (req,res) =>{
      // capturamos los datos del form
      //const camposDeNuevoProducto = req.body;
      //console.log(camposDeNuevoProducto)
      // asignar id a nuevo producto
      //camposDeNuevoProducto.id = 'ensalada' + Date.now();
      // convertimos precio a number
      //camposDeNuevoProducto.precio = Number(camposDeNuevoProducto.precio);
      //camposDeNuevoProducto.imagen = '/images/'+ req.file.filename
      // pusheamos los datos al array de objetos de js
      //products.push(camposDeNuevoProducto);
      // pasamos de un array de objetos de js a un objeto json y lo cargamos en el data
      //fs.writeFileSync(productsFilePath, JSON.stringify(products));        
      // redirigir la pagina
      //res.redirect('/create');
      
  //},