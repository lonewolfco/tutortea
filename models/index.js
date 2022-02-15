const User = require("./User");
const Tutor = require("./Tutor");
const Review = require("./Review");

//need to verify models with team

//User can have many reviews
User.hasMany(Review, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Reviews belong to a user
Review.belongsTo(User, {
    foreignKey: "user_id",
  });

// A tutor can have many reviews
Tutor.hasMany(Review, {
  foreignKey: "tutor_id",
  onDelete: "CASCADE",
});

// Reviews belong to a tutor
Review.belongsTo(Tutor, {
  foreignKey: "tutor_id",
});

module.exports = { User, Tutor, Review };
