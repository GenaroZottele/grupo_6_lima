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
      Producto.belongsToMany(models.Pedido, {
        as:'Pedidos',
        through:'product_order',
        foreignKey:'order_id',
        otherKey:'product_id',
        timestamps: false      
      });
      Producto.hasOne(models.Estado, {
        as:'estados',
        foreignKey:'status_id'}
      );
    }
  }
  Producto.init({
    id: {type:DataTypes.INTEGER, primaryKey:true},
    name: {type:DataTypes.STRING},
    description: {type:DataTypes.STRING},
    price: {type:DataTypes.FLOAT},
    image: {type:DataTypes.STRING},
    status_id: {type:DataTypes.STRING, foreignKey:true}
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};