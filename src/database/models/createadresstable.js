'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class createAdressTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  createAdressTable.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    buildingId: DataTypes.INTEGER,
    floor: DataTypes.INTEGER,
    office: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'createAdressTable',
  });
  return createAdressTable;
};