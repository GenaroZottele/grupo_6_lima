'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('buildings', 
    { id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: Sequelize.STRING,
      adress: Sequelize.STRING     
    });
  },

  async down (queryInterface, Sequelize) {
    
  }
};
