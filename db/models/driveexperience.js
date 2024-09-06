"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DriveExperience extends Model {
    static associate(models) {
      // define association here
      this.hasMany(models.Profile, {
        foreignKey: "driveExpirienceId",
      })
    }
  }
  DriveExperience.init(
    {
      experience: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "DriveExperience",
    }
  );
  return DriveExperience;
};
