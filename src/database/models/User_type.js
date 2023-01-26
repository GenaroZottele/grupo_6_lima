module.exports = function(sequelize, DataTypes) {

    let alias = "User_type";

    let cols = {        
        id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
        name: {type:DataTypes.STRING},                           
    };

    let config = {
        tableName: "order_detail",
        timestamps: false
    };

    let User_type = sequelize.define(alias, cols, config);

    //Asociaciones (hacerlas en base a script)
    
    return User_type;
}