'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userID: {
        allowNull: false,
        unique:true,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
      },
      nickName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      firstname: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      avatar: {
        defaultValue: "https://img.freepik.com/free-photo/user-profile-icon-front-side_187299-39596.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid",
        type: Sequelize.TEXT
      },
      dateOfBirthday: {
        type: Sequelize.DATE
      },
      bio: {
        type: Sequelize.TEXT
      },
      driveExpirienceId: {
        type: Sequelize.INTEGER,
        references: {
          model: "DriveExperiences",
          key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
      },
      createdAt: {
        defaultValue:Sequelize.fn('NOW'),
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue:Sequelize.fn('NOW'),
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Profiles');
  }
};