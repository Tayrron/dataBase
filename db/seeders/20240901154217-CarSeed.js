"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cars",
      [
        {
          generationID: 2,
          userID: 1,
          title: "Ford F-150 XLT", 
          price: 100000, 
          color: "Серебристый", 
          odometer: 100, 
          vin: "123456789ABCDEFG1", 
          year: new Date(2013),
          tax: 0,
        },
        {
          generationID: 3,
          userID: 2,
          title: "Mercedes-Benz E-Class E300", 
          price: 100000, 
          color: "Белый", 
          odometer: 200, 
          vin: "123456789ABCDEFG2", 
          year: new Date(2045),
          tax: 5,
        },
        {
          generationID: 2,
          userID: 3,
          title: "Mercedes-Benz F-546 врум", 
          price: 456789, 
          color: "Синий", 
          odometer: 110, 
          vin: "123456789ABCDEFG3", 
          year: new Date(2009),
          tax: 25,
        },
        {
          generationID: 1,
          userID: 4,
          title: "BMW 3 Series 330567654", 
          price: 876543, 
          color: "Черный", 
          odometer: 210, 
          vin: "123456789ABCDEFG4", 
          year: new Date(2007),
          tax: 78,
        },
        {
          generationID: 1,
          userID: 5,
          title: "BMW 3 Series апрорпав", 
          price: 26364748, 
          color: "Белый", 
          odometer: 310, 
          vin: "123456789ABCDEFG5", 
          year: new Date(1999),
          tax: 763,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cars", null, {});
  },
};
