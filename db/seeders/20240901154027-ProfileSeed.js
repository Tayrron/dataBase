"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Profiles",
      [
        {
          userID: 1,
          nickName: "Тура",
          firstname:"Артур",
          city:"Залукокоаже",
          avatar:"https://img.freepik.com/free-photo/user-profile-icon-front-side_187299-39596.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid", 
          dateOfBirthday: new Date (1995, 10, 5),
          bio: "победитель в турнире по теннису",
          driveExpirienceId: 4,
        },
        {
          userID: 2,
          nickName: "sadMaloy",
          firstname:"Ростислав",
          city:"Санкт-Петербург",
          avatar:"https://img.freepik.com/free-photo/user-profile-icon-front-side_187299-39596.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid",
          dateOfBirthday: new Date (2001, 0, 24), 
          bio: "Брат-близнец Костика",
          driveExpirienceId: 4,
        },
        {
          userID: 3,
          nickName: "borz1k",
          firstname:"Арсен",
          city:"Санкт-Петербург",
          avatar:"https://img.freepik.com/free-photo/user-profile-icon-front-side_187299-39596.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid",
          dateOfBirthday: new Date (1994, 4, 18), 
          bio: "покер - это жизнь",
          driveExpirienceId: 4,
        },
        {
          userID: 4,
          nickName: "happyBigBoy",
          firstname:"Костислав",
          city:"Эльбрус",
          avatar:"https://img.freepik.com/free-photo/user-profile-icon-front-side_187299-39596.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid",
          dateOfBirthday: new Date (2001, 6, 23), 
          bio: "Лучший игрок в теннис",
          driveExpirienceId: 4,
        },
        {
          userID: 5,
          nickName: "egorius",
          firstname:"Егор",
          city:"Шуя",
          avatar:"https://img.freepik.com/free-photo/user-profile-icon-front-side_187299-39596.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid",
          dateOfBirthday: new Date (2002, 6, 24), 
          bio: "Егор джуниор младший",
          driveExpirienceId: 4,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Profiles", null, {});
  },
};
