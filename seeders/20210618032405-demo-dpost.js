'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    
     await queryInterface.bulkInsert('dposts', [{
      darea: 'Houston, TX', 
      dbuildingsqft: 40943, 
      dlandacerage: 2, 
      dcategory: 'Shopping Center',
      dnotes: 'call 474904408098546',
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
 
     await queryInterface.bulkDelete('dposts', null, {});
  }
};
