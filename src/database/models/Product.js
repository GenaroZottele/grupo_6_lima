'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      products.belongsTo(models.Order_detail, {as:'products', foreignKey:'product_id'});
    }
  }
  products.init({
    id: {type:DataTypes.INTEGER, primaryKey:true},
    name: {type:DataTypes.STRING},
    description: {type:DataTypes.STRING},
    price: {type:DataTypes.FLOAT},
    discount: {type:DataTypes.INTEGER},
    image: {type:DataTypes.STRING},
    status: {type:DataTypes.INTEGER},
    createdAt: {type:DataTypes.DATETIME},
    updatedAt: {type:DataTypes.DATETIME},
    deletedAt: {type:DataTypes.DATETIME}
  }, {
    sequelize,
    modelName: 'Product',
  });
  return products;
};