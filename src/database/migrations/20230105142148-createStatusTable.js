'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('status', 
      { id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        name: Sequelize.STRING
      });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
