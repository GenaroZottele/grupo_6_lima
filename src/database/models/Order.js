'use strict';
const {
  Model, BelongsTo
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order.hasOne(models.Order_detail, {as: 'details', foreignKey:'order_id'});
      order.belongsTo(models.User, {as:'user', foreignKey: 'user_id'});     
    }
  }
  order.init({
    id: {type:DataTypes.INTEGER, primaryKey:true},
    user_id: {type:DataTypes.INTEGER, foreignKey:true},
    order_date: {type:DataTypes.DATETIME},
    comment: {type:DataTypes.INTEGER},
    total: {type:DataTypes.FLOAT},
    createdAt: {type:DataTypes.DATETIME},
    updatedAt: {type:DataTypes.DATETIME},
    deletedAt: {type:DataTypes.DATETIME}
  }, {
    sequelize,
    modelName: 'Order',
  });
  return order;
};