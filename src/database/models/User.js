module.exports = function(sequelize, DataTypes) {

    let alias = "User";

    let cols = {        
        id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
        full_name: {type:DataTypes.STRING},
        email: {type:DataTypes.STRING},
        password: {type:DataTypes.STRING},               
        phone: {type:DataTypes.INTEGER},        
        adress_id: {type:DataTypes.INTEGER},
        user_type_id: {type:DataTypes.INTEGER},
        avatar: {type:DataTypes.STRING}                     
    };

    let config = {
        tableName: "users",
        timestamps: false
    };

    let User = sequelize.define(alias, cols, config);
    
    //Asociaciones (realizadas en script de creacion de las tablas)

    return User;
}