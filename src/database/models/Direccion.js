'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Direccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       Direccion.belongsTo(models.Usuario, {as: 'usuarios'});
       Direccion.hasOne(models.Edificio, {as: 'edificios'});
    }
  }
  Direccion.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    buildingId: DataTypes.INTEGER,
    floor: DataTypes.INTEGER,
    office: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Direccion',
  });
  return Direccion;
};