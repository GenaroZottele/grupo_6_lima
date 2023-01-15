'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.hasMany(models.Pedido, {as:'pedidos', foreignKey:'user_id'})
      // Usuario.belongsTo(models.TipoUsuario, {as:'tiposusuarios'})
      Usuario.hasOne(models.Direccion, {as:'direccion', foreignKey:'adress_id'})
    }
  }
  Usuario.init({
    id: {type:DataTypes.INTEGER, primaryKey:true},
    userType: {type:DataTypes.STRING},
    adress_id: {type:DataTypes.INTEGER, foreignKey:true},
    name: {type:DataTypes.STRING},
    email: {type:DataTypes.STRING},
    phone: {type:DataTypes.INTEGER},
    password: {type:DataTypes.STRING},
    image: {type:DataTypes.STRING}
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};