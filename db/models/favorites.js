"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    static associate(models) {
      // define association here
    }
  }
  Favorites.init(
    {
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
      carID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Cars",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Favorites",
    }
  );
  return Favorites;
};
