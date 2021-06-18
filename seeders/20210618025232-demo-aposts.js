'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    
     await queryInterface.bulkInsert('aposts', [{
      aarea: 'Houston, TX', 
      abuildingsqft: 40943, 
      alandacerage: 2, 
      acatagory: 'Shopping Center',
      anotes: 'call 474904408098546',
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
 
     await queryInterface.bulkDelete('aposts', null, {});
  }
};
