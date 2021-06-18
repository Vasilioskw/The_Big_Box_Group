'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('aposts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      aarea: {
        type: Sequelize.STRING
      },
      abuildingsqft: {
        type: Sequelize.INTEGER
      },
      alandacerage: {
        type: Sequelize.INTEGER
      },
      acatagory: {
        type: Sequelize.STRING
      },
      anotes: {
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
    await queryInterface.dropTable('aposts');
  }
};