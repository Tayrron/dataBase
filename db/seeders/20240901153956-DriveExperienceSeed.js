"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "DriveExperiences",
      [
        {
          experience: 0,
        },
        {
          experience: 1,
        },
        {
          experience: 2,
        },
        {
          experience: 3,
        },
        {
          experience: 4,
        },
        {
          experience: 5,
        },
        {
          experience: 6,
        },
        {
          experience: 7,
        },
        {
          experience: 8,
        },
        {
          experience: 9,
        },
        {
          experience: 10,
        },

      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("DriveExperiences", null, {});
  },
};
