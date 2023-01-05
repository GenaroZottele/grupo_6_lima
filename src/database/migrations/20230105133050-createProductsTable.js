'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.createTable('products', 
      { id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        name: Sequelize.STRING,
        description: Sequelize.TEXT,
        price: Sequelize.FLOAT,
        image: Sequelize.STRING,
        status_id: Sequelize.INTEGER
      });
    /** Consultar foreign key y configuracion de image  */
  },

  async down (queryInterface, Sequelize) {

  }
};
