"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ModelCars",
      [
        {
          brandAutoID: 1,
          title: "3 Series",
        },
        {
          brandAutoID: 2,
          title: "F-150",
        },
        {
          brandAutoID: 3,
          title: "E-Class",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ModelCars", null, {});
  },
};
