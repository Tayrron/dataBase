"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ModelCar extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.BrandAuto, {
        foreignKey: "brandAutoID",
      })
      this.hasMany(models.Generation, {
        foreignKey: "modelCardID",
      })

      
    }
  }
  ModelCar.init(
    {
      brandAutoID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "BrandAutos",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    },
    {
      sequelize,
      modelName: "ModelCar",
    }
  );
  return ModelCar;
};
