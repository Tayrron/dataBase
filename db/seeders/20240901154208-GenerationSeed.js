"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Generations",
      [
        {
          modelCardID: 1,
          title: "G20",
        },
        {
          modelCardID: 2,
          title: "13th Generation",
        },
        {
          modelCardID: 3,
          title: "W213",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Generations", null, {});
  },
};
