'use strict';

const { now } = require("sequelize/dist/lib/utils");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'M. Hafidurrahman',
      birthdate: '2022-01-12 02:49:10',
      gender: 'female',
      address: 'Probolinggo, Jawa Timur',
      age: 30,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
