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
    }, 
    
    // LOS METODOS QUE SIGUEN TIENEN QUE PASAR AL userController    

    register : (req, res) => {
        return res.render('register');
    },
    login : (req, res) => {
        return res.render('login');
    },
    profile : (req, res) => {
        return res.render('userProfile');
    },          
    userDetail: (req,res) => {
        return res.render('userDetail');
}}

module.exports = controller;
