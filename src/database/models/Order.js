module.exports = function(sequelize, DataTypes) {

    let alias = "Order";

    let cols = {        
        id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
        user_id: {type:DataTypes.INTEGER},        
        order_date: {type:DataTypes.DATE},
        comment: {type:DataTypes.STRING},
        total: {type:DataTypes.FLOAT},                    
    };

    let config = {
        tableName: "order",
        timestamps: false
    };

    let Order = sequelize.define(alias, cols, config);
    
    //Asociaciones (hacerlas en base a script)
    
    return Order;
}