module.exports = function(sequelize, DataTypes) {

    let alias = "Product";

    let cols = {        
        id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
        name: {type:DataTypes.STRING},
        description: {type:DataTypes.STRING},
        price: {type:DataTypes.FLOAT},
        discount: {type:DataTypes.INTEGER},
        image: {type:DataTypes.STRING},
        status: {type:DataTypes.INTEGER},              
    };

    let config = {
        tableName: "products",
        timestamps: false
    };

    let products = sequelize.define(alias, cols, config);
    
    /* 
    Product.associate = function(models) {
        Product.belongsTo(models.Order_detail, {
            as:'products', 
            foreignKey:'product_id'
        });
    } */

    return products;
}
