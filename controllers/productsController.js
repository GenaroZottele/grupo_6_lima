const { fileLoader } = require('ejs');
const fs = require('fs');
const path = require('path');
//const upload = require('../middlewares/multerMiddleware')
//const productsFilePath = path.resolve('./data/products.json');
//let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 
const db = require('../src/database/models')

const controller = {
    
  
    create: function (req, res) {
        db.Producto.findAll()
          .then(function(productos){
            return res.render('/products', {productos: productos});
          })
    },
    save: function (req, res){
      db.Producto.create({
        nombre: req.body.nombre,
        base: req.body.base,
        aderezo: req.body.aderezo,
        ingredientes: req.body.ingredientes,
        imagen: '/images/'+ req.file.filename,
        precio: req.body.precio,
      });
        res.redirect('/products')
    },

    products: function (req, res) {
      db.Producto.findAll()
          .then(function(productos){
            return res.render('/products', {productos: productos});
          })
    },
    detail: (req, res) =>{
      db.Producto.findByPk(req.params.id, {include: [{association: 'Pedidos'}, {association: 'estados'}]})
        .then(function(producto) {
          return res.render('edit/', {producto:producto});
        })
      },
    
    edit: (req, res) => {    
      let pedidoProducto = db.Producto.findByPk(req.params.id)
      let pedidoPedido = db.Pedido.findAll();
      Promise.all([pedidoProducto, pedidoPedido])
        .then(function([producto, pedidos]) {
          return res.render('edit/', {producto:producto, pedidos:pedidos});
      })
    },
    

    update: (req, res) => {  
      db.Producto.update({
        nombre: req.body.nombre,
        base: req.body.base,
        aderezo: req.body.aderezo,
        ingredientes: req.body.ingredientes,
        imagen: '/images/'+ req.file.filename,
        precio: req.body.precio,
      },{
        where: {
        id: req.params.id
      }
    });
        res.redirect('/products' + req.params.id)
    },
    delete: (req, res) => {
      db.Producto.destroy({
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