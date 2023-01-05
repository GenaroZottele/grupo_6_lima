'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', 
    { id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: Sequelize.STRING,
      adressId: Sequelize.INTEGER,
      phone: Sequelize.INTEGER,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      image: Sequelize.STRING
    });
  },

  async down (queryInterface, Sequelize) {
    
  }
};
