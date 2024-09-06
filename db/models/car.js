"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "userID",
      });

      this.belongsTo(models.Generation, {
        foreignKey: "generationID",
      });

      this.hasMany(models.ImageCar, {
        foreignKey: "carID",
      });

      this.belongsToMany(models.User, {
        through: models.Favorites,
        foreignKey: "carID",
      })
    }
  }
  Car.init(
    {
      generationID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Generations",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      userID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      color: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      odometer: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      vin: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      year: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      tax: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Car",
    }
  );
  return Car;
};
