"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.DriveExperience, {
        foreignKey: "driveExpirienceId",
      })

      this.belongsTo(models.User, {
        foreignKey: "userID",
      })


    }


  }
  Profile.init(
    {
      userID: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      nickName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      firstname: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      avatar: {
        defaultValue:
          "https://img.freepik.com/free-photo/user-profile-icon-front-side_187299-39596.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid",
        type: Sequelize.TEXT,
      },
      dateOfBirthday: {
        type: Sequelize.DATE,
      },
      bio: {
        type: Sequelize.TEXT,
      },
      driveExpirienceId: {
        type: Sequelize.INTEGER,
        references: {
          model: "DriveExperiences",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Profile",
    }
  );
  return Profile;
};
