const fs = require('fs');
const path = require('path');
const db = require('../src/database/models/index'); 

const controller = {

    index : (req, res)=>{        
        db.Product.findAll()
          .then(function(products){
            return res.render('index', {products: products});
          });      
    },
    nosotros : (req, res) => {
        return res.render('nosotros');
    }, 
    contacto : (req, res) => {
        return res.render('contacto');
    },
    productCart : (req, res) => {
        return res.render('productCart');
    } 
    
}

module.exports = controller;
