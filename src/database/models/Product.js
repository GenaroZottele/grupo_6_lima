module.exports = function (sequelize, DataTypes) {
   let alias = 'Product';

   let cols = {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      amount: { type: DataTypes.INTEGER },
      name: { type: DataTypes.STRING },
      price: { type: DataTypes.FLOAT },
      discount: { type: DataTypes.INTEGER },
      description: { type: DataTypes.STRING },
      image: { type: DataTypes.STRING },
      status: { type: DataTypes.INTEGER },
   };

   let config = {
      tableName: 'products',
      timestamps: false,
   };

   let Product = sequelize.define(alias, cols, config);

   Product.associate = function (models) {
      Product.belongsToMany(models.Order_detail, {
         as: 'products',
         through: 'orderDetail_product',
         foreignKey: 'product_id',
         timestamps: false,
      });
   };

   return Product;
};
