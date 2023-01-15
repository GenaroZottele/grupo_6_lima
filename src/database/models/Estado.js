'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Estado.hasMany(models.Producto, {
        as:'productos',
        foreignKey:'status_id'});
    }
  }
  Estado.init({
    id: {type: DataTypes.INTEGER, primaryKey:true},
    name: {type:DataTypes.STRING}
  }, {
    sequelize,
    modelName: 'Estado',
  });
  return Estado;
};