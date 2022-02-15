const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}
//need to review this, copied from student activity 16.
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: {
          args: [true],
          msg: "Must only contain alphanumeric characters.",
        },
        len: {
          args: [8, 15],
          msg: "Must only contain alphanumeric characters.",
        },
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8],
          msg: "Must be at least 8 characters",
        },
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        if (updatedUserData.password) {
          updatedUserData.password = await bcrypt.hash(
            updatedUserData.password,
            10
          );
        }
        return updatedUserData;
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
