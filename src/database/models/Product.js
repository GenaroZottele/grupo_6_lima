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
     
    //Asociaciones (hacerlas en base a script)

    Product.associate = function(models) {
        
        Product.belongsToMany(models.Order_detail, {
            as:'order_detail', 
            through: 'orderDetail_product',
            foreignKey:'product_id',
            otherKey: 'oderDetail_id',
            timestamps: false
        });



    }

    return Product;
}
