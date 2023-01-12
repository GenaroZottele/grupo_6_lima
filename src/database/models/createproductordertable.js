'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class createProductOrderTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductoPedido.belongsTo(models.Pedido, {as:'pedidos'})
      ProductoPedido.belongsTo(models.Producto, {as:'productos'})
    }
  }
  createProductOrderTable.init({
    id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductoPedido',
  });
  return createProductOrderTable;
};