module.exports = function (sequelize, DataTypes) {
   let alias = 'Adress';

   let cols = {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      street: { type: DataTypes.STRING },
      floor: { type: DataTypes.INTEGER },
      office: { type: DataTypes.INTEGER },
   };

   let config = {
      tableName: 'adress',
      timestamps: false,
   };

   let Adress = sequelize.define(alias, cols, config);

   Adress.associate = function (models) {
      Adress.hasMany(models.User, {
         as: 'users',
         foreignKey: 'adress_id',
      });
   };

   return Adress;
};
