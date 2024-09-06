'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ImageCars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      url: {
        defaultValue: "https://media.istockphoto.com/id/1214396728/vector/red-car-icon-isolated-on-white-background-clip-art-car-red-cute-illustration-car-flat-simple.jpg?s=612x612&w=0&k=20&c=Lh5wvIsb1bXeZhBXXMLoLRsUQnp9ZmKmSBlLM-KTxEQ=",
        type: Sequelize.TEXT
      },
      carID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Cars",
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
    await queryInterface.dropTable('ImageCars');
  }
};