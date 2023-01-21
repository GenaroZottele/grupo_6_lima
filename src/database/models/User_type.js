'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_type.belongsTo(models.User, {as: 'user_type', foreignKey:'user_type_id'});
    }
  }
  user_type.init({
    id: {type:DataTypes.INTEGER},
    name: {type:DataTypes.STRING},
    createdAt: {type:DataTypes.DATETIME},
    updatedAt: {type:DataTypes.DATETIME},
    deletedAt: {type:DataTypes.DATETIME}
  }, {
    sequelize,
    modelName: 'user_type',
  });
 return user_type;
};