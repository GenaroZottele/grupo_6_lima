'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('product_order', 
    { id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      product_id: Sequelize.INTEGER,
      order_id: Sequelize.INTEGER
    });
  },

  async down (queryInterface, Sequelize) {

  }
};
