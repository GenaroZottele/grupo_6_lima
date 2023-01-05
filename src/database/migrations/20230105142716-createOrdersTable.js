'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', 
    { id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      user_id: Sequelize.INTEGER
    });
  },

  async down (queryInterface, Sequelize) {

  }
};
