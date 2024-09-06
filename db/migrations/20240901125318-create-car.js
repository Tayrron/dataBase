'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      generationID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Generations",
          key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
      },
      userID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      color: {
        allowNull: false,
        type: Sequelize.STRING
      },
      odometer: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      vin: {
        allowNull: false,
        unique:true,
        type: Sequelize.STRING
      },
      year: {
        allowNull: false,
        type: Sequelize.DATE
      },
      tax: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Cars');
  }
};