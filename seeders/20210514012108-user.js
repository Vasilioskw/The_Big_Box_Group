'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Aposts', [{
      aarea: 'Houston, TX', 
      abuildingsqft: 40943, 
      alandacerage: 2, 
      acatagory: 'Shopping Center',
      anotes: 'call 474904408098546',
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});

  await queryInterface.bulkInsert('Dposts', [{
    darea: 'Houston, TX', 
        dbuildingsqft: 40943, 
        dlandacerage: 2, 
        dcatagory: 'Shopping Center',
        dnotes: 'call 79834793445',
    createdAt: new Date(),
    updatedAt: new Date()
}], {});
},

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Aposts', null, {});
    await queryInterface.bulkDelete('Dposts', null, {});

  }
};