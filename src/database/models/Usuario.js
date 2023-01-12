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
      Usuario.hasMany(models.Pedido, {as:'pedidos'})
      Usuario.belongsTo(models.TipoUsuario, {as:'tiposusuarios'})
      Usuario.belongsTo(models.Direccion, {as:'direcciones'})
    }
  }
  Usuario.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};