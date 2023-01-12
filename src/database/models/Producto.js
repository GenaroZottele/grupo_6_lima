'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Producto.hasMany(models.ProductoPedido, {as:'productosPedidos'})
      Producto.belongsTo(models.Estado, {as:'estados'})
    }
  }
  Producto.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    image: DataTypes.STRING,
    status_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};