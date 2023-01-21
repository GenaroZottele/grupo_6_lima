'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       order_detail.hasMany(models.Product, {as:'products', foreignKey:'product_id'});
       order_detail.belongsTo(models.Order, {as:'order', foreignKey:'order_id'});
    }
  }
  order_detail.init({
    id: {type: DataTypes.INTEGER, primaryKey:true},
    order_id: {type: DataTypes.INTEGER, foreignKey:true},
    product_id: {type:DataTypes.INTEGER, foreignKey:true},
    price: {type: DataTypes.FLOAT},
    quantity: {type: DataTypes.INTEGER},
    createdAt: {type: DataTypes.DATETIME},
    updatedAt: {type: DataTypes.DATETIME},
    deletedAt: {type: DataTypes.DATETIME}
  }, {
    sequelize,
    modelName: 'Order_detail',
  });
  return order_detail;
};