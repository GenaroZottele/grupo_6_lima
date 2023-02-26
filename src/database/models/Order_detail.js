module.exports = function (sequelize, DataTypes) {
   let alias = 'Order_detail';

   let cols = {
      order_id: { type: DataTypes.INTEGER },
      product_id: { type: DataTypes.INTEGER },
      price: { type: DataTypes.FLOAT },
      quantity: { type: DataTypes.INTEGER },
   };

   let config = {
      tableName: 'order_detail',
      timestamps: false,
   };

   let Order_detail = sequelize.define(alias, cols, config);

   Order_detail.associate = function (models) {
      Order_detail.belongsToMany(models.Product, {
         as: 'products',
         through: 'orderDetail_product',
         foreignKey: 'orderDetail_id',
         otherKey: 'product_id',
         timestamps: false,
      });
      Order_detail.belongsTo(models.Order, {
         as: 'order',
         foreignKey: 'order_id',
      });
   };

   return Order_detail;
};
