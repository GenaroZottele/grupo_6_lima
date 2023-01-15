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
      Pedido.belongsTo(models.Usuario, {
        as:'usuario',
        foreignKey: 'user_id'});
        
      Pedido.belongsToMany(models.Producto, {
        as:'productos',
        through:'product_order',
        foreignKey:'product_id',
        otherKey:'order_id',
        timestamps: false
      });
    }
  }
  Pedido.init({
    id: {type:DataTypes.INTEGER, primaryKey:true},
    user_id: {type:DataTypes.INTEGER, foreignKey:true}
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};