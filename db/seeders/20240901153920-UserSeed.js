"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          yandexID: 948474,
          phone: '28916784536',
          email: "arthur_ne@mail"
        },
        {
          yandexID: 2314,
          phone: '98918714536',
          email: "rostik_ne@mail"
        },
        {
          yandexID: 42556,
          phone: '1123784536',
          email: "arsen_ne@mail"
        },
        {
          yandexID: 76565,
          phone: '56916744098',
          email: "kostik_ne@mail"
        },
        {
          yandexID: 3456,
          phone: '48916744098',
          email: "egor_ne@mail"
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
