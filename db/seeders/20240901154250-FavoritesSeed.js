"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Favorites",
      [
        {
          userID: 5,
          carID: 1,
        },
        {
          userID: 3,
          carID: 2,
        },
        {
          userID: 2,
          carID: 3,
        },
        {
          userID: 4,
          carID: 3,
        },
        {
          userID: 1,
          carID: 4,
        },
        {
          userID: 2,
          carID: 5,
        },

      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Favorites", null, {});
  },
};
