const fs = require('fs');
const path = require('path');

const productsFilePath = path.resolve('./data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {

    index: (req, res)=>{
        const visitedProducts = products.filter(product => product.category == 'visited')
        const inSaleProducts = products.filter(product => product.category == 'in-sale')
    },

}