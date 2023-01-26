module.exports = function(sequelize, DataTypes) {

    let alias = "User";

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
        tableName: "users",
        timestamps: false
    };

    let User = sequelize.define(alias, cols, config);
    
    //Asociaciones (hacerlas en base a script)

    return User;
}