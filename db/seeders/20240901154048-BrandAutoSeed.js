"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "BrandAutos",
      [
        {
          title: "BMW",
          description: "Немецкий производитель, известный своими изысканными и мощными автомобилями.",
          logo: "https://example.com/logos/bmw.png"
      },
      {
          title: "Ford",
          description: "Американская марка, популярная благодаря своим пикапам и внедорожникам.",
          logo: "https://example.com/logos/ford.png"
      },
      {
          title: "Mercedes-Benz",
          description: "Премиум-бренд из Германии, предлагающий роскошные автомобили и технологии.",
          logo: "https://example.com/logos/mercedes.png"
      },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("BrandAutos", null, {});
  },
};
