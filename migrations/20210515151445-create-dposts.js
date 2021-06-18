'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dposts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      darea: {
        type: Sequelize.STRING
      },
      dbuildingsqft: {
        type: Sequelize.INTEGER
      },
      dlandacerage: {
        type: Sequelize.INTEGER
      },
      dcatagory: {
        type: Sequelize.STRING
      },
      dnotes: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dposts');
  }
};