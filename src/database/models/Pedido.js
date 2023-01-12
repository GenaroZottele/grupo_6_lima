'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pedido.belongsTo(models.Usuario, {as:'usuarios'})
      Pedido.hasMany(models.ProductoPedido, {as:'productosPedidos'})
    }
  }
  Pedido.init({
    id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};