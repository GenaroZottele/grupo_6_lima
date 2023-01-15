'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Edificio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Edificio.belongsTo(models.Direccion, {
        as:'direccion',
        foreignKey:'building_id'});
    }
  }
  Edificio.init({
    id: {type:DataTypes.INTEGER, primaryKey:true},
    name: {type:DataTypes.STRING},
    adress: {type:DataTypes.STRING}
  }, {
    sequelize,
    modelName: 'Edificio',
  });
  return Edificio;
};