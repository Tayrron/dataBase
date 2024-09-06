"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Generation extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.ModelCar, {
        foreignKey: "modelCardID",
      })

      this.hasMany(models.Car, {
        foreignKey: "generationID",
      })
    }


  }
  Generation.init(
    {
      modelCardID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "ModelCars",
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
      modelName: "Generation",
    }
  );
  return Generation;
};
