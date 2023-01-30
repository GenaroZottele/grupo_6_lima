module.exports = function(sequelize, DataTypes) {

    let alias = "Product";

    let cols = {        
        id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
        name: {type:DataTypes.STRING},        
        price: {type:DataTypes.FLOAT},
        discount: {type:DataTypes.INTEGER},
        description: {type:DataTypes.STRING},
        image: {type:DataTypes.STRING},
        status: {type:DataTypes.INTEGER},              
    };

    let config = {
        tableName: "products",
        timestamps: false
    };

    let Product = sequelize.define(alias, cols, config);    
     
    //Asociaciones (realizadas en script de creacion de las tablas)    

    return Product;
}
