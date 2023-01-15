'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductoPedido.belongsTo(models.Pedido, {as:'pedido'})
      ProductoPedido.belongsTo(models.Producto, {as:'productos'})
    }
  }
  product_order.init({
    id: {type:DataTypes.INTEGER, primaryKey:true},
    product_id: {type:DataTypes.INTEGER, foreignKey:true},
    order_id: {type:DataTypes.INTEGER, foreignKey:true}
  }, {
    sequelize,
    modelName: 'product_order',
  });
  return product_order;
};