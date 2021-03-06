const sequelize = require("../config/connection");
const { User, Tutor, Review } = require("../models");
//needs additional code, await the tutor, review, users seeds files under line 4.
const userData = require("./userSeeds.json");
const reviewData = require("./reviewSeeds.json");
const tutorData = require("./tutorSeeds.json");
//add review seeds

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Tutor.bulkCreate(tutorData);
  await Review.bulkCreate(reviewData);
  process.exit(0);
};

seedAll();
