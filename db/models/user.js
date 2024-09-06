"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      this.hasOne(models.Profile, {
        foreignKey: "userID",
      })
      
      this.hasMany(models.Car, {
        foreignKey: "userID",
      })

      this.belongsToMany(models.Car, {
        through: models.Favorites,
        foreignKey: "userID",
      })
    }
  }
  User.init(
    {
      yandexID: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
      },
      phone: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
