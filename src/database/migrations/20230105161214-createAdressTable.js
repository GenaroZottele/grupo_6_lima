'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('adress', 
    { id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: Sequelize.STRING,
      buildingId: Sequelize.INTEGER,
      floor: Sequelize.INTEGER,
      office: Sequelize.INTEGER      
    });
  },

  async down (queryInterface, Sequelize) {
    
  }
};
