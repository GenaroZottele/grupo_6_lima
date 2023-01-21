'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.hasOne(models.User_type, {as:'user_type', foreignKey:'user_type_id'});
      users.hasOne(modes.Adress, {as:'adress', foreignKey: 'adress_id'});
    }
  }
  users.init({
    id: {type:DataTypes.INTEGER, primaryKey:true},
    user_type_id: {type:DataTypes.STRING, foreignKey:true},
    adress_id: {type:DataTypes.INTEGER, foreignKey:true},
    full_name: {type:DataTypes.STRING},
    email: {type:DataTypes.STRING},
    phone: {type:DataTypes.INTEGER},
    password: {type:DataTypes.STRING},
    avatar: {type:DataTypes.STRING},
    createdAt: {type:DataTypes.DATETIME},
    updatedAt: {type:DataTypes.DATETIME},
    deletedAt: {type:DateTypes.DATETIME}
  }, {
    sequelize,
    modelName: 'User',
  });
  return users;
};