module.exports = function (sequelize, DataTypes) {
   let alias = 'Order';

   let cols = {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      user_id: { type: DataTypes.INTEGER },
      order_date: { type: DataTypes.DATE },
      comment: { type: DataTypes.STRING },
      total: { type: DataTypes.FLOAT },
   };

   let config = {
      tableName: 'order',
      timestamps: false,
   };

   let Order = sequelize.define(alias, cols, config);

   Order.associate = function (models) {
      Order.belongsTo(models.User, {
         as: 'user',
         foreignKey: 'user_id',
      });
   };

   return Order;
};
