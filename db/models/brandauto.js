"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BrandAuto extends Model {
    static associate(models) {
      // define association here
      this.hasMany(models.ModelCar, {
        foreignKey: "brandAutoID",
      })
    }
  }
  BrandAuto.init(
    {
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      logo: {
        type: Sequelize.TEXT,
      },
    },
    {
      sequelize,
      modelName: "BrandAuto",
    }
  );
  return BrandAuto;
};
