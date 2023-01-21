'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class adress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       adress.belongsTo(models.User, {as: 'users', foreignKey:'adress_id'});
    }
  }
  adress.init({
    id: {type: DataTypes.INTEGER, primaryKey:true},
    street: {type: DataTypes.STRING},
    floor: {type: DataTypes.INTEGER},
    office: {type: DataTypes.INTEGER},
    createdAt: {type: DataTypes.DATETIME},
    updatedAt: {type: DataTypes.DATETIME},
    deletedAt: {type: DataTypes.DATETIME}

  }, {
    sequelize,
    modelName: 'Adress',
  });
  return adress;
};