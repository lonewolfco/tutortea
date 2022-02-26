const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const filter = require("leo-profanity");

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: {
          args: [1],
          msg: "Must assign at least one cup.",
        },
        max: {
          args: [5],
          msg: "Must assign no more than 5 cups.",
        },
      },
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: {
          args: [1, 100],
          msg: "Must be between 1 and 100 characters.",
        },
      },
    },
    daytime: {
      type: DataTypes.BOOLEAN,
    },
    nights: {
      type: DataTypes.BOOLEAN,
    },
    weekends: {
      type: DataTypes.BOOLEAN,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    tutor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tutor",
        key: "id",
      },
    },
  },
  {
    hooks: {
      beforeCreate: (reviewData) => {
        reviewData.review = filter.clean(reviewData.review);
        return reviewData;
      },
      beforeUpdate: (reviewData) => {
        reviewData.review = filter.clean(reviewData.review);
        return reviewData;
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "review",
  }
);

module.exports = Review;
