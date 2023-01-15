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
       Direccion.hasMany(models.Usuario, {as: 'usuarios', foreignKey:'usuario_id'});
       Direccion.hasOne(models.Edificio, {as: 'edificio', foreignKey:'building_id'});
    }
  }
  Direccion.init({
    id: {type: DataTypes.INTEGER, primaryKey:true},
    name: {type: DataTypes.STRING},
    building_id: {type: DataTypes.INTEGER, foreignKey:true},
    floor: {type: DataTypes.INTEGER},
    office: {type: DataTypes.INTEGER}
  }, {
    sequelize,
    modelName: 'Direccion',
  });
  return Direccion;
};