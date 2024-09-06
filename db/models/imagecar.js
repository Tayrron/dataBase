"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ImageCar extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.Car, {
        foreignKey: "carID",
      });
    }
  }
  ImageCar.init(
    {
      url: {
        defaultValue:
          "https://media.istockphoto.com/id/1214396728/vector/red-car-icon-isolated-on-white-background-clip-art-car-red-cute-illustration-car-flat-simple.jpg?s=612x612&w=0&k=20&c=Lh5wvIsb1bXeZhBXXMLoLRsUQnp9ZmKmSBlLM-KTxEQ=",
        type: Sequelize.TEXT,
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
      modelName: "ImageCar",
    }
  );
  return ImageCar;
};
